import { LineChart } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar glass" style={{
      display: 'flex',
      alignItems: 'center',
      padding: '1rem 2rem',
      margin: '1rem',
      gap: '0.75rem'
    }}>
      <LineChart size={28} color="#0ea5e9" />
      <h1 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#f8fafc' }}>AI Research Agent</h1>
    </nav>
  );
}

export default Navbar;