'use client'
import { useDispatch } from "react-redux";
import { login } from "@/store/slice/authSlice"
import { useState, useEffect, useRef, ChangeEvent, FormEvent } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { signIn, dummy } from "@/utils/metauser";

const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const router = useRouter()

    // send authentication to backend and fetch token
    useEffect(() => {

    })

    const dispatch = useDispatch()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await signIn(email, password);

            if (response.message === 'signin unsuccessful') {
                toast.error("Account not found.", {
                    position: "bottom-left",
                    autoClose: 1500,
                })
                return
            }
            dispatch(login({ user: email, isLoggedIn: true, token: token }));

        } catch (error) {
            console.error(error);
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

                <ToastContainer />

                <button type="submit" className="p-3 mt-6 bg-fuchsia-600 hover:bg-fuchsia-900 rounded text-white">Sign in</button>
                <div className="mt-6 pt-3 border-t flex items-center justify-center">
                    <span className="text-sm">Don&apos;t have an account? <a href="/signup" className="underline text-fuchsia-900">Sign up</a></span>
                </div>
            </form>
        </main>
    )
}

export default SignIn