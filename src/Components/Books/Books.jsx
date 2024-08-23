import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';
import { useNavigate } from 'react-router-dom';

const Books = () => {

    const [books, setBooks] = useState([]);
    const [visible, setVisible] = useState(6);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    const showMoreBooks = () => {
        setVisible(prevCount => prevCount + 6);
    }


    return (
        <div className='mb-28'>
            <h1 className="text-[#131313] text-[40px] font-bold font-['Playfair Display'] text-center mb-9">Books</h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    books.slice(0, visible).map((book, idx) => <BookCard key={idx} book={book}></BookCard>)
                }
            </div>

            {
                visible < books.length &&
                <div className="flex justify-center mt-6">
                    <button onClick={showMoreBooks} className="bg-[#23be0a] text-white px-4 py-2 rounded hover:bg-green-700">
                        Show More
                    </button>
                </div>
            }
        </div>
    );
};

export default Books;