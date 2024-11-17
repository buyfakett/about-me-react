import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    </div>
);
