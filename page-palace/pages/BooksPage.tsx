// pages/BooksPage.tsx
import { useEffect, useState } from "react";

interface Book {
  id: number;
  title: string;
  author: string;
  publisher: string;
  publication_date: string;
  isbn: string;
  genre: string;
  description: string;
  cover_image: string;
  pages: number;
  language: string;
  edition: string;
  price: number;
  stock_quantity: number;
  status: string;
}

const BooksPage = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch("/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {books.map((book) => (
          <div
            key={book.id}
            style={{
              border: "1px solid #ccc",
              padding: "16px",
              margin: "16px",
            }}
          >
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <p>{book.description}</p>
            {book.cover_image && (
              <img
                src={book.cover_image}
                alt={book.title}
                style={{ width: "200px" }}
              />
            )}
            <p>Publisher: {book.publisher}</p>
            <p>Publication Date: {book.publication_date}</p>
            <p>ISBN: {book.isbn}</p>
            <p>Genre: {book.genre}</p>
            <p>Pages: {book.pages}</p>
            <p>Language: {book.language}</p>
            <p>Edition: {book.edition}</p>
            <p>Price: ${book.price}</p>
            <p>Stock Quantity: {book.stock_quantity}</p>
            <p>Status: {book.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
