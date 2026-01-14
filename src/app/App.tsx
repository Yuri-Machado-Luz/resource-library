import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/website/Header';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--hex-main-black)] text-[var(--hex-main-white)]">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}
