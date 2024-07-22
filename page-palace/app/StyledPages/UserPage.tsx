"use client";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import BookGrid from "../components/BookGrid";

interface Book {
  id: number;
  title: string;
  author: string;
  publisher: string;
  cover_image: string;
}

const UserPage = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [activeGenre, setActiveGenre] = useState<string>("");
  const [activeSubgenre, setActiveSubgenre] = useState<string>("");
  const logo = "logo.png";

  const fetchBooks = async (genre: string = "", subgenre: string = "") => {
    const query = genre
      ? `?genre=${encodeURIComponent(genre)}&subgenre=${encodeURIComponent(
          subgenre
        )}`
      : "";
    const response = await fetch(`/api/books${query}`);
    const data = await response.json();
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleFilterChange = (genre: string, subgenre: string) => {
    setActiveGenre(genre);
    setActiveSubgenre(subgenre);
    fetchBooks(genre, subgenre);
  };

  return (
    <div className="flex h-screen">
      <Sidebar logo={logo} onFilterChange={handleFilterChange} />
      <div className="flex-1 p-6">
        <SearchBar placeholder="Search for books" />
        <BookGrid books={books} />
      </div>
    </div>
  );
};

export default UserPage;
