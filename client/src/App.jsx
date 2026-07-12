import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import Report from "./components/Report";
import { researchCompany } from "./services/api";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [reportData, setReportData] = useState(null);

  const handleSearch = async (company) => {
    try {
      setLoading(true);
      setReportData(null);

      const data = await researchCompany(company);
      setReportData(data.report);
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
        {!reportData && !loading && (
          <div className="hero-section">
            <h1 className="hero-title">AI Investment Research Agent</h1>
            <p className="hero-subtitle">
              Enter any publicly traded company to generate a comprehensive AI-powered investment analysis.
            </p>
          </div>
        )}

        <SearchBar
          onSearch={handleSearch}
          loading={loading}
          hasData={!!reportData}
        />

        {loading && <Loader />}

        {!loading && reportData && <Report data={reportData} />}
      </div>
    </div>
  );
}

export default App;