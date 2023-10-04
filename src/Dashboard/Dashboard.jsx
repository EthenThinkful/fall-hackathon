import React from "react";
import NavBar from "../NavBar/NavBar";

function Dashboard({handleSend}) {
    return (
        <>
            {/* <NavBar /> */}
            <h1>This is the Dashboard</h1>
            <button onClick={handleSend}>Send Prompt to OpenAI</button>
        </>
    )

}

export default Dashboard;