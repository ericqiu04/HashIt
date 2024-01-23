'use client'
import { useDispatch } from "react-redux";
import { signup } from "@/store/slice/authSlice"
import { useState, useEffect, useRef, ChangeEvent, FormEvent } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { register } from "@/utils/metauser";

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [token, setToken] = useState('')
    const router = useRouter()

    const dispatch = useDispatch()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            if (password !== confirmPassword) {
                toast.error("Mismatching passwords.", {
                    position: "bottom-left",
                    autoClose: 1500,
                })
                return
            }

            const response = await register(email, password)

            if (response.message === 'signin unsuccessful') {
                toast.error("Error registering user. Try with a different combination.", {
                    position: "bottom-left",
                    autoClose: 1500,
                })
                return
            }
            if (response.message === 'invalid request data') {
                toast.error("Invalid user password.", {
                    position: "bottom-left",
                    autoClose: 1500,
                })
                return
            }
            
            dispatch(signup({ user: email, isLoggedIn: true, token: token }));
            router.push('/dashboard')
        }
        catch (error) {
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
                    <div className="mb-1 block">
                        <label htmlFor="password">Password</label>
                    </div>
                    <input id="password" type="password" className="bg-neutral-50 focus:outline-none focus:border-fuchsia-600 p-3 rounded border w-full" required
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
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

                <button type="submit" className="p-3 mt-6 bg-fuchsia-600 hover:bg-fuchsia-900 rounded text-white">Sign up</button>
                <div className="mt-6 pt-3 border-t flex items-center justify-center">
                    <span className="text-sm">Existing account? <a href="/signin" className="underline text-fuchsia-900">Sign in</a></span>
                </div>
            </form>
        </main>
    )
}

export default SignUp