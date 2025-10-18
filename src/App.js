import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Hero count={count} setCount={setCount} />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
