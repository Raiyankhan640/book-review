import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
    return (
        <div className='container mx-auto mt-5 mb-10 min-h-lvh'>
            <div className="h-[100px] bg-[#131313]/5 rounded-2xl">
                <h1 className='text-center text-4xl font-extrabold pt-7'>Books</h1>
            </div>
            <div className="flex justify-center mt-8 mb-12">
                <button className="h-[52px] px-5 py-3 bg-[#23be0a] rounded-lg flex justify-center items-center gap-2">
                    <div className="text-center text-white text-lg font-semibold font-['Work Sans']">Sort By</div>
                    <IoIosArrowDown size={25} color="white" />
                </button>
            </div>
            <div>
                <div className="border-b border-gray-300">
                    <div className="flex items-center">
                        <Link
                            to="/listedBooks/read"
                            className="px-5 py-3 border-l border-t border-r rounded-t-lg border-gray-300 text-black font-semibold"
                        >
                            Read Books
                        </Link>
                        <Link
                            to="/listedBooks/wishlist"
                            className="px-5 py-3 border-b-2 border-transparent text-gray-500 hover:text-black hover:border-gray-300 font-semibold"
                        >
                            Wishlist Books
                        </Link>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default ListedBooks;
