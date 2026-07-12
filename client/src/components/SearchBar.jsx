import { useState } from "react";
import { Search, Sparkles } from "lucide-react";

function SearchBar({ onSearch, loading, hasData }) {
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!company.trim()) return;

    onSearch(company);
  };

  return (
    <div className={`search-wrapper ${hasData ? "has-data" : ""}`}>
      <form className="search-form glass" onSubmit={handleSubmit}>
        <Search className="search-icon" size={24} />
        <input
          type="text"
          placeholder="Search any company (e.g. Apple, Tesla...)"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <button type="submit" disabled={loading} className="search-btn">
          {loading ? (
            <span className="btn-content loading-text">Analyzing...</span>
          ) : (
            <span className="btn-content">
              <Sparkles size={18} /> Analyze
            </span>
          )}
        </button>
      </form>
    </div>
  );
}

export default SearchBar;