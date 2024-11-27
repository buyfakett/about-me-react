import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // 引入 BrowserRouter
import { ThemeProvider } from "./util/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter> {/* 用 BrowserRouter 包裹整个应用 */}
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
