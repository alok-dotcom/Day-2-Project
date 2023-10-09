const Footer = () => {
    return (
        <div className=" md:shadow-lg p-10 md:p-1 md:mt-1 h-[10vh] md:flex md:justify-around">
            <div className="">
                <h3>LEEWAYHERTZ</h3>
                <p>About us</p>
                <p>Global AI club</p>
            </div>
            <div className="md:border-r-4 md:border-indigo-500 border-b-2 border-indigo-500 "></div>
            <div className="">
                <h3>SERVICES</h3>
                <p>Generative AI</p>
                <p>Artificial Intelligence & ML</p>
            </div>
            <div className="md:border-r-4 md:border-indigo-500 border-b-2 border-indigo-500 "></div>

            <div className="">
                <h3>INDUSTRIES</h3>
                <p>Consumer Electronics</p>
                <p>Financial Markets</p>
            </div>
            <div className="md:border-r-4 md:border-indigo-500 border-b-2 border-indigo-500 "></div>

            <div className="">
                <h3>CONTACT US</h3>
                <p>Get In Touch</p>
                <p>415-301-2880</p>
            </div>
        </div>
    );
};

export default Footer;
