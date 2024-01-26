'use client'
import { useDispatch } from "react-redux";
import { signup } from "@/store/slice/authSlice"
import { useState, useEffect, useRef, ChangeEvent, FormEvent } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { register } from "@/utils/metauser";
import { isValid } from "@/utils/password-validation";
import { IoIosInformationCircleOutline, IoMdEye, IoMdEyeOff } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [token, setToken] = useState('')
    const router = useRouter()

    const dispatch = useDispatch()

    const handleClickPasswordInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        toast.info("Password must contain 8 or more characters, upper-case and lower-case, numbers, and at least one punctuation character", {
            position: "bottom-left",
            autoClose: 4500
        })
    }

    const handleClickTogglePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            toast.error("Mismatching passwords.", {
                position: "bottom-left",
                autoClose: 1500,
            })
            return
        }

        if (!isValid(password)) {
            toast.error('Invalid password', {
                position: "bottom-left",
                autoClose: 1500,
            })
            return
        }

        try {
            setIsLoading(true)
            const response = await register(email, password)

            if (!response.success && typeof response.response == 'string') {
                setIsLoading(false)
                toast.error(response.response, {
                    position: "bottom-left",
                    autoClose: 1500,
                })
                return
            }

            dispatch(signup({ user: email, isLoggedIn: true, token: token }));
            setIsLoading(false)
            router.push('/dashboard')
        }
        catch (error) {
            setIsLoading(false)
            console.error(error)
            return
        }
    }

    return (
        <main className="h-screen flex items-center justify-center">
            <form className="flex w-5/6 sm:w-2/3 flex-col gap-3 p-9 border rounded" onSubmit={handleSubmit}>
                <h1 className="text-6xl mb-3"><span className="text-fuchsia-600">Hash</span>It.</h1>
                <div>
                    <div className="mb-1 block">
                        <label htmlFor="email">Email</label>
                    </div>
                    <input id="email" type="email" className="bg-neutral-50 focus:outline-none focus:border-fuchsia-600 p-3 rounded border w-full" placeholder="johndoe@gmail.com" required
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <div className="mb-1 block flex gap-1">
                        <label htmlFor="password">Password</label>
                        <button className="text-fuchsia-600" onClick={handleClickPasswordInfo}><IoIosInformationCircleOutline /></button>
                    </div>
                    <div className="relative">
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            className="bg-neutral-50 focus:outline-none focus:border-fuchsia-600 p-3 rounded border w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            className="absolute inset-y-0 right-0 flex items-center px-4 text-neutral-400"
                            onClick={handleClickTogglePassword}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                            {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                        </button>
                    </div>
                </div>
                <div>
                    <div className="mb-1 block">
                        <label htmlFor="passwordconfirm">Confirm Password</label>
                    </div>
                    <input id="passwordconfirm" type="password" className="bg-neutral-50 focus:outline-none focus:border-fuchsia-600 p-3 rounded border w-full" required
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <ToastContainer />

                <button type="submit" className="p-3 mt-6 bg-fuchsia-600 hover:bg-fuchsia-900 rounded text-white">
                    {isLoading ? <div className="flex items-center justify-center gap-3"><AiOutlineLoading3Quarters className="animate-spin" />Loading</div> : <div>Submit</div>}
                </button>
                <div className="mt-6 pt-3 border-t flex items-center justify-center">
                    <span className="text-sm">Existing account? <a href="/signin" className="underline text-fuchsia-900">Sign in</a></span>
                </div>
            </form>
        </main>
    )
}

export default SignUp