
const Banner = () => {
    return (
        <div>
            <div
                className="hero min-h-screen rounded-3xl overflow-hidden mt-8"
                style={{ backgroundImage: 'url(https://i.ibb.co.com/BBZnSXt/Rectangle-1-3.png)' }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="w-8/12 mx-auto">
                        <h1 className="mb-5 text-4xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5">
                            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database, and solve 500+ coding problems to become an exceptionally well-rounded, world-class Programmer.
                        </p>
                        <button className="bg-[#0BE58A] font-semibold text-white rounded-lg mr-3 py-3 px-9">Explore Now</button>
                        <button className="border font-semibold border-white rounded-full py-3 px-9">Our FeedBack</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
