import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-extrabold text-gray-800 flex items-center gap-2">
          🎯 <span>Student Job Tracker</span>
        </h1>
        <div className="flex space-x-6">
          <Link to="/" className="text-blue-700 hover:text-blue-900 font-medium transition">Home</Link>
          <Link to="/add" className="text-green-700 hover:text-green-900 font-medium transition">Add Job</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
