
const Header = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-between mt-4 items-center">
                <div>
                    <h3 className="text-2xl font-semibold ">Recipe Calories</h3>
                </div>
                <div>
                    <ul className="flex gap-2">
                        <li className="text-[20px] cursor-pointer">Home</li>
                        <li className="text-[20px] cursor-pointer">Recipes</li>
                        <li className="text-[20px] cursor-pointer">About</li>
                        <li className="text-[20px] cursor-pointer">Search</li>

                    </ul>
                </div>
                <div className="flex justify-between">
                    <div  className="bg-gray-300 w-full px-3 mr-3 py-2 rounded-3xl">
                        <button> <i className="fa-solid fa-magnifying-glass"></i> Search</button>
                    </div>
                    <span><i className=" flex justify-center items-center bg-[#0BE58A] w-10 h-10 rounded-full fa-regular fa-user"></i></span>
                </div>
            </div>
            
        </div>
    );
};

export default Header;