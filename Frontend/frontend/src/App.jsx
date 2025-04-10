import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddJob from './pages/AddJob';
import EditJob from './pages/EditJob';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddJob />} />
          <Route path="/edit/:id" element={<EditJob />} />
        </Routes>
      </div>
    </div>
  );
}


export default App;