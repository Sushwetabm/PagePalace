/* import Link from "next/link";

interface SidebarProps {
  logo: string;
}

const Sidebar: React.FC<SidebarProps> = ({ logo }) => {
  return (
    <div className="bg-pink-200 h-screen p-4 w-64">
      <img src={logo} alt="Logo" className="w-12 h-12 mb-4" />
      <ul>
        <li className="py-2">
          <Link href="/cart">
            <span className="text-gray-600 hover:text-gray-900">
              Go to Cart
            </span>
          </Link>
        </li>
        <li className="py-2">
          <Link href="/settings">
            <span className="text-gray-600 hover:text-gray-900">
              Settings/Help/FAQ
            </span>
          </Link>
        </li>
        <li className="py-2">
          <Link href="/logout">
            <span className="text-gray-600 hover:text-gray-900">Log Out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
 */
"use client";
import Link from "next/link";
import { useState } from "react";

interface SidebarProps {
  logo: string;
}

const Sidebar: React.FC<SidebarProps> = ({ logo }) => {
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

  const [activeGenre, setActiveGenre] = useState<string | null>(null);

  const handleGenreClick = (genre: string) => {
    setActiveGenre(activeGenre === genre ? null : genre);
  };

  return (
    <div className="bg-[#698acf]  h-screen p-4 w-75">
      <nav className="flex items-center justify-start mb-4">
        <img src={logo} alt="Logo" className="w-24 h-24 mr-4" />
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
                      <span className="text-gray-600 hover:text-gray-900">
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
  );
};

export default Sidebar;
