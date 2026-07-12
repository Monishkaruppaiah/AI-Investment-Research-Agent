import { useState } from "react";

function SearchBar({ onSearch, loading }) {
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!company.trim()) return;

    onSearch(company);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="🔍 Search any company (Apple, Tesla, Microsoft...)"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        {loading ? "⏳ Analyzing..." : "🚀 Analyze"}
      </button>
    </form>
  );
}

export default SearchBar;