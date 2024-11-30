import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const handleClearLocalStorage = () => {
    localStorage.clear();
    alert('LocalStorage đã được xóa!');
    window.location.reload()
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Link to={'/about'}>About Page</Link> <br />
      <button onClick={handleClearLocalStorage}>Xóa LocalStorage</button>
    </div>
  );
}

export default HomePage;
