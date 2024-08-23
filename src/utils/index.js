import toast from 'react-hot-toast'

export const getBooks = () => {
    let books = [];
    const storedBooks = localStorage.getItem('books');

    if (storedBooks) {
        books = JSON.parse(storedBooks);
    }
    return books;
}

export const saveBooks = (book) => {
    const books = getBooks();
    const isExist = books.find(b => b.id === book.id);

    if (isExist) {
        return toast.error('Already Added to Wishlist!')
    }

    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    toast.success('Book Added to Wishlist Successfully!')
}

export const deleteBook = id => {
    let book = getBooks();
    const remaining = book.filter(b => b.id !== id)
    localStorage.setItem('books', JSON.stringify(remaining))
    toast.success('Book Removed from Wishlist!')
}