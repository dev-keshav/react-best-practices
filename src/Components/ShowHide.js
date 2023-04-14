import React, { useState } from "react";

function ShowHide() {

    const [show, setShow] = useState("");

    function handleClick() {
        if(show===""){
            setShow("Visible ?");
        }
        else if(show!==""){
            setShow("");
        }
    }
    

    return(
        <>
        <h1>{show}</h1>
        <button onClick={handleClick}>Show/Hide</button>
        </>
    )
}

export default ShowHide;