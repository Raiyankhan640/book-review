import { IoIosArrowDown } from "react-icons/io";

const ListedBooks = () => {
    return (
        <div className='container mx-auto mt-5 mb-10'>
            <div className="h-[100px] bg-[#131313]/5 rounded-2xl">
                <h1 className='text-center text-4xl font-extrabold pt-7'>Books</h1>
            </div>
            <div className="flex justify-center mt-8">
                <button className="h-[52px] px-5 py-3 bg-[#23be0a] rounded-lg flex justify-center items-center gap-2">
                    <div className="text-center text-white text-lg font-semibold font-['Work Sans']">Sort By</div>
                    <IoIosArrowDown size={25} color="white" />
                </button>
            </div>

        </div>
    );
};

export default ListedBooks;