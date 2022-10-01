function ScrollButton() {
    return (
        <div className="scroll_container">
            <button className="scroll_button" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'});}}>Back to top</button>
        </div>
    )
}

export default ScrollButton;