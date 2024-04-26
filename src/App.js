import { About, Home, Products, Contact } from './pages';
import { Route, Routes, Navigate } from "react-router-dom"

function App() {
  return (
    <>

      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    </>
  );
}

export default App;

