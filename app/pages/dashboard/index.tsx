import Sidebar from "@/components/dashboard/session-sidebar"

function Index() {
    return(
        <main className="flex">
            <Sidebar />
            <div className="flex-1">
            </div>
        </main>
    )
}

export default Index