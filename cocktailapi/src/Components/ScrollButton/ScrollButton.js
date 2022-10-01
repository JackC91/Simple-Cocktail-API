import { useEffect, useState } from "react";

function ScrollButton() {
    const [ scroll, setScroll ] = useState(0)
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setScroll(window.scrollY)
            } else setScroll(window.scrollY)
        })
    }, []);

    if(scroll > 190) {
    return (
        <div className="scroll_container">
            <button className="scroll_button" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'});}}>Back to top</button>
        </div>
    )
    } else return
}

export default ScrollButton;