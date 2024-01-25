import { LuUser } from "react-icons/lu";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { RiCameraLensLine } from "react-icons/ri";
import { useState, useEffect } from "react";

const ClientPanel = () => {

    const [isPopupVisible, setIsPopupVisible] = useState(false)

    const handleUserButtonClick = () => {
        setIsPopupVisible(!isPopupVisible)
    }
    

    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsPopupVisible(false);
            }
        };

        document.addEventListener("keydown", handleEscapeKey);

        return () => {
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, []);

    return (
        <main className="m-3 pb-3 grid gap-3 justify-center border-b text-neutral-600 text-lg">
            <button
                className={`bg-neutral-100 ${isPopupVisible ? 'bg-neutral-300' : 'hover:bg-neutral-300'} hover:text-black p-3 rounded`}
                onClick={handleUserButtonClick}
            >
                <LuUser />
            </button>

            {isPopupVisible && (
                <div className="absolute left-20 border p-3 rounded text-sm">

                    <button className="block mb-2">Account Information</button>
                    <button className="block" onClick={() => setIsPopupVisible(false)}>
                        Logout
                    </button>
                </div>
            )}

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