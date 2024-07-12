import React, { useState } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import AdminPanel from './pages/AdminPanel/AdminPanel';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound'; // Make sure this component exists

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [articles, setArticles] = useState([]);

  const addProduct = (product) => {
    setArticles([...articles, product]);
  };

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products articles={articles} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route 
          path="/admin" 
          element={isAuthenticated ? <AdminPanel addProduct={addProduct} /> : <Navigate to="/login" />} 
        />
        <Route path="*" element={<NotFound />} /> {/* Handle all other routes */}
      </Routes>
    </div>
  );
}

export default App;
