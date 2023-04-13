import React, { useState } from "react";

function ShowHide() {

    const [show, setShow] = useState("");
    
    function handleCon() {
        if(show===""){
            setShow((show) => "Is this visible ?");
        }
        else if(show==="Is this vivible ?"){
            setShow((show) => "");
        }
    }

    return(
        <>
        <h1>{show}</h1>
        <button onClick={handleCon}>Show</button>
        <button onClick={handleCon}>Hide</button>
        </>
    )
}

export default ShowHide;