const Popup = ({closePop}) => {
    return (
        <>
            <p>Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for "hamburger" or "logout."</p>
            <button onClick={closePop}>Close popup</button>
        </>
    )
}

export default Popup;