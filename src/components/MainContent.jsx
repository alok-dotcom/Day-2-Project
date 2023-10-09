const MainContent = () => {
    return (
        <div className=" bg-gradient-to-r from-slate-900 to-blue-500 shadow-md rounded flex md:flex-row flex-col-reverse w-full pb-10">
            <div className="md:w-1/2 flex flex-col items-center justify-center text-white  md:gap-6 gap-4 md:pl-20 md:pt-2">
                <p className="md:text-5xl text-2xl">AI development</p>
                <p className="md:text-5xl text-2xl">company enabling</p>
                <p className="md:text-5xl text-2xl">innovation and rapid</p>
                <p className="md:text-5xl text-2xl">development</p>

                <p className="md:text-3xl px-12 ">
                    We build cutting edge software solutions for startups and
                    enterprises.
                </p>

                <button className="bg-blue-700 md:w-1/3 w-3/4 md:p-3 p-2">
                    AI Development
                </button>
            </div>
            <div className="md:h-3/4  mt-4 ">
                <img
                    src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/07040440/Leewayhertz-Banner.png"
                    alt="body-image"
                    className="h-full pt-2 px-2"
                />
            </div>
        </div>
    );
};

export default MainContent;
