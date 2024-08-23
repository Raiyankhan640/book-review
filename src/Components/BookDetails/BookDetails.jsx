import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { saveBooks } from '../../utils';

const BookDetails = () => {
    const book = useLoaderData();

    const handleAdToWish = () => {
        saveBooks(book, 'wish');
    }

    const handleAdToRead = () => {
        saveBooks(book, 'read');
    }

    return (
        <div className="container mx-auto p-6 flex justify-center items-center mb-28">
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-center md:w-1/2">
                    <img src={book.image} alt={book.name} className="w-full max-w-sm rounded-lg shadow-lg" />
                </div>
                <div className="flex flex-col gap-4 justify-center md:w-1/2">
                    <h1 className="text-3xl font-bold mb-2">{book.name}</h1>
                    <p className="text-lg text-gray-600 mb-4">
                        By : <span className="font-semibold">{book.author}</span>
                    </p>
                    <p className="text-lg font-medium text-gray-700">{book.category}</p>
                    <hr className="my-4 border-gray-300" />
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Review :</h2>
                        <p className="text-gray-700 mb-4">{book.review}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <h2 className="text-lg font-semibold">Tag :</h2>
                        {book.tags.map((tag, index) => (
                            <span key={index} className="bg-[#23be0a] text-white px-3 py-1 rounded-full text-sm">
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <p><strong>Number of Pages:</strong> {book.pages}</p>
                        <p><strong>Publisher:</strong> {book.publisher}</p>
                        <p><strong>Year of Publishing:</strong> {book.year}</p>
                        <p><strong>Rating:</strong> {book.rating}</p>
                    </div>
                    <div className="flex gap-4 mt-6">
                        <button onClick={handleAdToRead} className="bg-[#23be0a] hover:bg-green-700 text-white py-2 px-4 rounded-lg">Read</button>
                        <button onClick={handleAdToWish} className="bg-[#b2dffc] hover:bg-blue-500 text-white py-2 px-4 rounded-lg">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
