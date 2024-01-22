import { useEffect } from "react";
import { useSelector } from "react-redux"
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/dashboard/session-sidebar"

function Index() {
    const router = useRouter()

    const user = useSelector((state: RootState) => state.auth.user);
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    const token = useSelector((state: RootState) => state.auth.token);

    useEffect(() => {
        if (!isLoggedIn) {
            router.push('/signin')
        }
    }, [isLoggedIn, router])

    return (
        <main className="flex">
            <Sidebar />
            <div className="flex-1">
                
            </div>
        </main>
    )
}

export default Index