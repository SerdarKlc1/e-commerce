import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import StoreFront from "./StoreFront";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    if (loggedIn){
        return <>
            <StoreFront />
            <button className="btn btn-outline" onClick={() => setLoggedIn(false)}>Logout</button>
        </>;
    }else {
        return <>
            <h2>Please login</h2>
            <button className="btn btn-primary" onClick={() => setLoggedIn(true)}>Login</button>
    </>;
    }
}

createRoot(document.querySelector("#react-root")).render(<React.StrictMode><App /></React.StrictMode>);