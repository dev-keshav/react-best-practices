import React, { useState } from "react";

const ModalCompo = () => {

    const [showModal, setShowModal] = useState(false);
    const closePop = () => setShowModal(false);

    const Popup = () => {
        return (
            <>
                <p>Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for "hamburger" or "logout."</p>
                <button onClick={closePop}>Close popup</button>
            </>
        )
    }

    return (
        <>
            <button onClick={() => setShowModal(true)}>Click popup</button> 
            {showModal && <Popup /> }
        </>
    )
}

export default ModalCompo;