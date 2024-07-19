// pages/UserPage.tsx
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
  const logo = "logo.png";

  useEffect(() => {
    fetch("/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar logo={logo} />
      <div className="flex-1 p-6">
        <SearchBar placeholder="Search for books" />
        <BookGrid books={books} />
      </div>
    </div>
  );
};

export default UserPage;
