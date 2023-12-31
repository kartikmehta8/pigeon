import Home from "./pages/Home";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useConnectionStatus } from "@thirdweb-dev/react";

function App() {
    const connectionStatus = useConnectionStatus();
    if (connectionStatus === "disconnected") return (
        <div>
            <div className="flex justify-between mx-20 my-6">
                <div>
                    <div className="text-white text-4xl font-bold">Pigeon</div>
                    <div className="text-white text-md">
                        Decentralize Emails
                    </div>
                </div>
                <ConnectWallet
                    style={{
                        backgroundColor: "#000000",
                        color: "#ffffff",
                        fontStyle: "normal",
                        fontWeight: "bold",
                    }}
                    dropdownPosition={{
                        side: "bottom",
                        align: "left",
                    }}
                    btnTitle="Connect"
                />
            </div>
            <div>
                <Home />
            </div>
        </div>
    );
    if (connectionStatus === "connected")
    return <p style={{color:"#ffffff",}}> dashboard </p>;
}

export default App;
