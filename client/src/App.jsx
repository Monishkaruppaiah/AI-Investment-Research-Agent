import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import Report from "./components/Report";
import { researchCompany } from "./services/api";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState("");

  const handleSearch = async (company) => {
    try {
      setLoading(true);

      const data = await researchCompany(company);

      setReport(data.report);
    } catch (error) {
      console.error(error);
      alert("Failed to generate report.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Navbar />

      <div className="container">
        <SearchBar
          onSearch={handleSearch}
          loading={loading}
        />

        {loading && <Loader />}

        {!loading && <Report report={report} />}
      </div>
    </div>
  );
}

export default App;