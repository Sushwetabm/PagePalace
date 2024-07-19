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
    <div className="grid grid-cols-2 gap-8">
      {books.map((book) => (
        <div key={book.id} className="bg-gray-200 h-32 rounded-md flex">
          <div style={{ flex: 40 }} className="bg-red-200 h-full">
            <img
              src={book.cover_image}
              alt={book.title}
              className="h-full w-full object-fit"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div style={{ flex: 60 }} className="bg-blue-200 h-full p-2">
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
