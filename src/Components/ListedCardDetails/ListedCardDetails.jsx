import React from 'react';
import { getBooks } from '../../utils';

const ListedCardDetails = () => {
  const books = getBooks('wish');

  return (
    <div className="container mx-auto p-6">
      {books.length > 0 ? (
        books.map((book) => (
          <div key={book.id} className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden mb-6 h-[60%]">
            <div className="md:w-1/4">
              <img src={book.image} alt={book.name} className="object-cover w-full h-full" />
            </div>
            <div className="flex flex-col justify-between p-4 md:w-3/4">
              <div>
                <h3 className="text-2xl font-bold mb-2">{book.name}</h3>
                <p className="text-gray-600">By : <span className="font-semibold">{book.author}</span></p>
                <div className="flex flex-wrap gap-2 my-3">
                  {book.tags.map((tag, index) => (
                    <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <p>Year of Publishing: {book.year}</p>
                  <p>Publisher: {book.publisher}</p>
                  <p>Page: {book.pages}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    Category: {book.category}
                  </span>
                  <span className="ml-4 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                    Rating: {book.rating}
                  </span>
                </div>
                <button className="bg-[#23be0a] text-white px-4 py-2 rounded-lg shadow">
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

export default ListedCardDetails;
