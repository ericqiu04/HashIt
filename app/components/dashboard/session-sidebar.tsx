import ClientPanel from "./sidebar/client-panel"

const Sidebar = () => {
    return (
        <main className="flex flex-col h-screen border-r">
            <div>
                <ClientPanel />
            </div>
            <div>
                <ul className="flex-grow max-h-fit pl-3 pr-3 overflow-scroll scrollbar-hide">

                </ul>
            </div>
        </main>
    )
}

export default Sidebar