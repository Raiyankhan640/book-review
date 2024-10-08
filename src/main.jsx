import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Root from './Components/Root/Root.jsx';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import PagesToRead from './Components/PagesToRead/PagesToRead.jsx';
import Books from './Components/Books/Books.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';
import ListedCardDetails from './Components/ListedCardDetails/ListedCardDetails.jsx';
import { Toaster } from 'react-hot-toast';
import ReadBookDetails from './Components/ListedCardDetails/ReadBookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks />,
        children: [
          {
            index: true, // This sets the default child route
            element: <Navigate to="read" replace />, // Redirect to /listedBooks/read
          },
          {
            path: "wishlist",
            element: <ListedCardDetails />,
          },
          {
            path: "read",
            element: <ReadBookDetails />,
          },
        ],
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead />,
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails />,
        loader: async ({ params }) => {
          const response = await fetch('/books.json');
          const books = await response.json();
          return books.find(book => book.id.toString() === params.id);
        },
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-center" reverseOrder={false} />
  </StrictMode>,
);
