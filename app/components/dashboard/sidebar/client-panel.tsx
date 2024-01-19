import { LuUser } from "react-icons/lu";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { RiCameraLensLine } from "react-icons/ri";

const ClientPanel = () => {
    return (
        <main className="m-3 pb-3 grid gap-3 justify-center border-b text-neutral-600 text-lg">
            <button className="bg-neutral-100 hover:bg-neutral-300 hover:text-black p-3 rounded">
                <LuUser />
            </button>
            <button className="bg-neutral-100 hover:bg-neutral-300 hover:text-black p-3 rounded">
                <TbBrandGoogleAnalytics />
            </button>
            <button className="bg-neutral-100 hover:bg-neutral-300 hover:text-black p-3 rounded">
                <RiCameraLensLine />
            </button>
        </main>
    )
}

export default ClientPanel