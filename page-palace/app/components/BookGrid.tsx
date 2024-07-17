interface BookGridProps {
  books: { image: string; text: string }[];
}

const BookGrid: React.FC<BookGridProps> = ({ books }) => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {books.map((book, index) => (
        <div key={index} className="bg-gray-200 h-32 rounded-md flex">
          <div style={{ flex: 40 }} className="bg-red-200 h-full">
            <img
              src={book.image}
              alt="book"
              className="h-full w-full object-cover"
            />
          </div>
          <div style={{ flex: 60 }} className="bg-blue-200 h-full p-2">
            <p>{book.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookGrid;
