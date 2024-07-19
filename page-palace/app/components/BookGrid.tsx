// components/BookGrid.tsx
interface Book {
  id: number;
  title: string;
  author: string;
  publisher: string;
  cover_image: string;
}

interface BookGridProps {
  books: Book[];
}
const BookGrid: React.FC<BookGridProps> = ({ books }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 .ml-16rem">
      {books.map((book) => (
        <div
          key={book.id}
          className="bg-gray-200 rounded-md flex flex-wrap md:flex-nowrap"
        >
          <div style={{ flex: 40 }} className="bg-red-200 h-full md:w-1/2">
            <img
              src={book.cover_image}
              alt={book.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div style={{ flex: 60 }} className="bg-blue-200 p-2 md:w-1/2">
            <p>
              <strong>Title:</strong> {book.title}
            </p>
            <p>
              <strong>Author:</strong> {book.author}
            </p>
            <p>
              <strong>Publisher:</strong> {book.publisher}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookGrid;
