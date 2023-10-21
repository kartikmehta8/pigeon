import React from "react";
import { createRoot } from "react-dom/client";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./index.css";
import App from "./App";

const activeChain = "ethereum";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <ThirdwebProvider
            activeChain={activeChain}
            clientId={process.env.REACT_APP_TEMPLATE_CLIENT_ID}
        >
            <App />
        </ThirdwebProvider>
    </React.StrictMode>
);
