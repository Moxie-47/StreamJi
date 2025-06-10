import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm.trim()}`);
      setSearchTerm("");
    }
  };

  return (
    <header className="w-full flex items-center justify-between px-4 py-2 bg-white shadow">
      <div className="text-2xl font-bold text-red-600">YouTube Clone</div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="border rounded-l px-2 py-1"
        />
        <button type="submit" className="bg-blue-500 text-white px-3 rounded-r">
          Search
        </button>
      </form>
    </header>
  );
}

export default Header;
