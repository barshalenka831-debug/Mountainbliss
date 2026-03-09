import '../Style.css'
const Floatingbtn = () => {
    return (
        <div className="floating-buttons">
            <a href="tel:+918730051559" className="call-btn">
                <i className="fa-solid fa-phone-volume"></i>
            </a>
            <a
                href="https://wa.me/8730051559"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
            >
                <i className="fa-brands fa-whatsapp"></i>
            </a>
        </div>
    )
}

export default Floatingbtn;
