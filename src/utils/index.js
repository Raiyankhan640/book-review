import { toast } from 'react-hot-toast';

export const getBooks = (text) => {
    let books = [];
    const storedBooks = localStorage.getItem(text);

    if (storedBooks) {
        books = JSON.parse(storedBooks);
    }
    return books;
}

export const saveBooks = (book, listType) => {
    const currentList = getBooks(listType);
    const isInCurrentList = currentList.find(b => b.id === book.id);

    if (isInCurrentList) {
        return toast.error(`Already Added to ${listType === 'read' ? 'Read' : 'Wishlist'}!`);
    }

    if (listType === 'wish') {
        const readList = getBooks('read');
        const isInReadList = readList.find(b => b.id === book.id);

        if (isInReadList) {
            return toast.error('Book already exists in the Read list!');
        }
    }

    currentList.push(book);
    localStorage.setItem(listType, JSON.stringify(currentList));
    toast.success(`Book Added to ${listType === 'read' ? 'Read' : 'Wishlist'} Successfully!`);
}
