import React from "react";
import ReactDOMClient from "react-dom/client";
import "./reset.scss";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { NoteContextProvider } from "./contexts/NoteContext";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

//Call make Server
makeServer();

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthContextProvider>
                <NoteContextProvider>
                    <App />
                </NoteContextProvider>
            </AuthContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
