import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from './util/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </div>
);
