import { useState } from "react";

export function SearchBar() {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    window.location.href = `http://localhost:3000/search/${search}`;
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        className="search"
        type="text"
        placeholder="Movie Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)} // Correct the onChange handler
        onKeyPress={handleKeyPress} // Optional: Allow pressing "Enter" to search
      />
      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
