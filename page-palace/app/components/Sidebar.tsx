"use client";
import Link from "next/link";
import { useState } from "react";

interface SidebarProps {
  logo: string;
}

const Sidebar: React.FC<SidebarProps> = ({ logo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeGenre, setActiveGenre] = useState("");

  const genres = [
    {
      name: "Children's",
      subgenres: [
        "Picture Books",
        "Early Readers",
        "Middle Grade",
        "Young Adult",
      ],
    },
    {
      name: "Fantasy",
      subgenres: [
        "Epic Fantasy",
        "Urban Fantasy",
        "Magical Realism",
        "Alternate History",
      ],
    },
    {
      name: "Historical",
      subgenres: [
        "Historical Romance",
        "Historical Mystery",
        "Historical Fantasy",
      ],
    },

    {
      name: "Romance",
      subgenres: [
        "Contemporary Romance",
        "Historical Romance",
        "Romantic Suspense",
      ],
    },
    {
      name: "Science Fiction",
      subgenres: ["Hard Sci-Fi", "Space Opera", "Time Travel", "Cyberpunk"],
    },
    {
      name: "Thriller",
      subgenres: [
        "Psychological Thriller",
        "Crime Thriller",
        "Action Thriller",
      ],
    },
    // Add more genres and subgenres here...
  ];

  const handleLogoClick = () => {
    setIsOpen(!isOpen);
  };

  const handleGenreClick = (genreName: string) => {
    setActiveGenre(genreName);
  };

  return (
    <div>
      <nav className="flex items-center justify-start mb-4">
        <img
          src={logo}
          alt="Logo"
          className="w-24 h-24 mr-4 cursor-pointer"
          onClick={handleLogoClick}
        />
        <h1 className="text-2xl text-white font-serif">Page Palace</h1>
      </nav>
      {isOpen && (
        <div className="bg-[#698acf] h-screen p-4 w-75 fixed left-0 top-0">
          <nav className="flex items-center justify-start mb-4">
            <img
              src={logo}
              alt="Logo"
              className="w-24 h-24 mr-4 cursor-pointer"
              onClick={handleLogoClick}
            />
            <h1 className="text-2xl text-gray-900 font-serif">Page Palace</h1>
          </nav>
          <ul>
            {genres.map((genre, index) => (
              <li key={index} className="py-2">
                <button
                  onClick={() => handleGenreClick(genre.name)}
                  className="text-gray-600 font-bold bg-white rounded-full p-2 w-full text-left"
                >
                  {genre.name}
                </button>
                {activeGenre === genre.name && (
                  <ul>
                    {genre.subgenres.map((subgenre, subIndex) => (
                      <li key={subIndex} className="py-2 pl-4">
                        <Link href={`/books/${genre.name}/${subgenre}`}>
                          <span className="text-white hover:text-gray-200">
                            {subgenre}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
