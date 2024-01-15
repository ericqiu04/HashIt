const SignUp = () => {
    return (
        <main className="h-screen flex items-center justify-center">
            <form className="flex w-5/6 sm:w-2/3 flex-col gap-3 p-9 border rounded">
                <h1 className="text-6xl mb-3"><span className="text-fuchsia-600">Hash</span>It.</h1>
                <div>
                    <div className="mb-1 block">
                        <label htmlFor="email">Email</label>
                    </div>
                    <input id="email" type="email" className="bg-neutral-50 focus:outline-none focus:border-fuchsia-600 p-3 rounded border w-full" placeholder="johndoe@gmail.com" required />
                </div>
                <div>
                    <div className="mb-1 block">
                        <label htmlFor="password">Password</label>
                    </div>
                    <input id="password" type="password" className="bg-neutral-50 focus:outline-none focus:border-fuchsia-600 p-3 rounded border w-full" required />
                </div>
                <div>
                    <div className="mb-1 block">
                        <label htmlFor="passwordconfirm">Confirm Password</label>
                    </div>
                    <input id="passwordconfirm" type="password" className="bg-neutral-50 focus:outline-none focus:border-fuchsia-600 p-3 rounded border w-full" required />
                </div>
                <button type="submit" className="bg-neutral-50 p-3 mt-6 bg-fuchsia-600 hover:bg-fuchsia-900 rounded text-white">Sign up</button>
                <div className="mt-6 pt-3 border-t flex items-center justify-center">
                    <span className="text-sm">Existing account? <a href="/signin" className="underline text-fuchsia-900">Sign in</a></span>
                </div>
            </form>
        </main>
    )
}

export default SignUp