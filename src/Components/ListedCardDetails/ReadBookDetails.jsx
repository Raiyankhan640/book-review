import React from 'react';
import { getBooks } from '../../utils';

const ReadBookDetails = () => {

    const books = getBooks('read');

    return (
        <div className="container mx-auto p-6 gap-6">
            {books.length > 0 ? (
                books.map((book) => (
                    <div key={book.id} className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden mb-4 h-[auto] md:h-[200px] gap-12">
                        <div className="md:w-1/4 relative">
                            <img 
                                src={book.image} 
                                alt={book.name} 
                                className="object-cover w-full h-full absolute inset-0" 
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="flex flex-col justify-between p-3 md:p-4 md:w-3/4">
                            <div>
                                <h3 className="text-xl font-bold mb-1 md:text-2xl">{book.name}</h3>
                                <p className="text-gray-600 text-sm md:text-base">By: <span className="font-semibold">{book.author}</span></p>
                                <div className="flex flex-wrap gap-1 md:gap-2 my-2 md:my-3">
                                    {book.tags.map((tag, index) => (
                                        <span key={index} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs md:text-sm">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="text-xs md:text-sm text-gray-600">
                                    <p>Year of Publishing: {book.year}</p>
                                    <p>Publisher: {book.publisher}</p>
                                    <p>Page: {book.pages}</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-2 md:mt-4">
                                <div className="flex items-center">
                                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs md:text-sm">
                                        Category: {book.category}
                                    </span>
                                    <span className="ml-2 md:ml-4 bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs md:text-sm">
                                        Rating: {book.rating}
                                    </span>
                                </div>
                                <button className="bg-[#23be0a] text-white px-3 py-1 rounded-lg shadow text-xs md:text-sm">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No books in the Read list yet.</p>
            )}
        </div>
    );
};

export default ReadBookDetails;
