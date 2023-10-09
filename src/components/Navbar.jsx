const Navbar = () => {
    return (
        <div className=" shadow-md rounded-lg flex items-center justify-around h-[9vh] w-full px-2">
            <div className="">
                <img
                    src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2022/08/17090916/LeewayHertzLogo2021.svg"
                    alt="leewayay_logo"
                    className="w-1/2"
                />
            </div>
            <div className="md:flex hidden w-1/2 justify-between">
                <ul className="flex justify-between w-3/4">
                    <li>PRODUCTS</li>
                    <li>SERVICES</li>
                    <li>INDUSTRIES</li>
                    <li>INSIGHTS</li>
                    <li>WORK</li>
                    <li>ABOUT</li>
                </ul>
                <button>CONTACT US</button>
            </div>

            <div className="md:hidden">
                <a className="text-4xl" href="#">
                    &#8801;
                </a>
            </div>
        </div>
    );
};

export default Navbar;
