import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AddEvent from './components/AddEvent';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
        <Navbar />
          <main className="py-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add-event" element={<AddEvent />} />
            </Routes>
          </main>
      </div>
    </Router>
  );
}

export default App;
