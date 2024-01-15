import SignUp from "@/components/user-portal/signup";
import InfoPanel from "@/components/misc/info-panel";

export default function Index() {
    return (
        <main className="flex-1 w-full flex-col h-screen grid grid-cols-1 sm:grid-cols-2">
            <SignUp />
            <InfoPanel />
        </main>
    )
}