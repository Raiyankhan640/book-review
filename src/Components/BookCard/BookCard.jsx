import { IoMdStarOutline } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

const BookCard = ({ book }) => {
    const { id, image, tags, bookName, author, category, rating } = book;

    const bookId = useParams();

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/bookDetails/${id}`)
    }

    return (
        <div onClick={handleNavigate} className="border rounded-lg shadow-lg p-4 bg-white">
            <div className="flex justify-center items-center bg-gray-100 p-4 rounded-lg">
                <img className="h-48 object-contain" src={image} alt={bookName} />
            </div>
            <div className="mt-4 flex gap-2">
                {tags.map((tag, index) => (
                    <span key={index} className="text-sm bg-green-100 text-green-600 px-2 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{bookName}</h3>
            <p className="text-sm text-gray-500">By: {author}</p>
            <div className="mt-4 flex justify-between items-center">
                <span className="text-sm font-medium">{category}</span>
                <div className="flex gap-2 items-center">
                    <span className="text-sm font-medium">{rating} <i className="fas fa-star"></i></span>
                    <IoMdStarOutline size={20} />
                </div>
            </div>
        </div>
    );
};

export default BookCard;
