interface SearchBarProps {
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  return (
    <div className="flex justify-between items-center space-x-4 mb-4">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder={placeholder}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          Filter
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-[#86367F] hover:bg-[#df1bcf] text-white font-bold py-2 px-4 rounded-md">
          Add to cart
        </button>
        <button className="bg-[#F6828C] hover:bg-[#e22434] text-white font-bold py-2 px-4 rounded-md">
          UserProfile
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
