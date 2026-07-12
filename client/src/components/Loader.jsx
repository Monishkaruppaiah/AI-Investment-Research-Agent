function Loader() {
  return (
    <div className="loader-container">
      <div className="pulse-ring"></div>
      <h2 className="loading-text">Analyzing Company Data...</h2>
      <p className="loading-subtext">Compiling financials, news, and AI insights</p>
    </div>
  );
}

export default Loader;