export default function Footer() {
    return (
        <main className="w-full bg-neutral-900 ">
            <div className="grid sm:grid-cols-2">
                <section className="flex p-24">
                    <div className="text-center sm:text-left">
                        <h1 className="text-white text-4xl">Hashi.</h1>
                        <h2 className="text-neutral-400">Supercharge your social presence.</h2>
                    </div>
                </section>
                <section className="flex items-center justify-center">
                    <div className="grid gap-4 text-center sm:text-left">
                        <div>
                            <a href="https://github.com/ericqiu04/project" className="text-white">Github</a>
                        </div>

                        <div>
                            <a href="https://github.com/ericqiu04/project/tree/main/api" className="text-white">API for developers</a>
                        </div>

                        <div>
                            <a href="https://linkedin.com/" className="text-white">Connect</a>
                        </div>
                        
                    </div>
                </section>
            </div>
            <footer className="flex p-6 sm:pt-0 lg:pl-24">
                <h1 className="text-neutral-400 text-sm text-center">© A collaborative project by ericqiu04 and danmxli. All rights reserved.</h1>
            </footer>
        </main>

    )
}