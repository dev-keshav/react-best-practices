import React, { useState } from "react";
import Popup from "./Popup";

const ModalCompo = () => {

    const [showModal, setShowModal] = useState(false);
    const closePop = () => setShowModal(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Click popup</button> 
            { showModal && <Popup closePop={closePop} />  }
        </>
    )
}

export default ModalCompo;