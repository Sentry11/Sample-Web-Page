import React from "react";
import {createRoot} from "react-dom/client";
import "./styles/index.scss";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
const root = createRoot(document.getElementById("root"))
root.render(
    <Router>
        <App />
    </Router>
    
);
