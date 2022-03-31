import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cats from './components/Animals/Cats';
import Dogs from './components/Animals/Dogs';
import Home from './components/Home/Home';
import Header from './components/Navs/Header';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat" element={<Cats />} />
        <Route path="/dog" element={<Dogs />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
