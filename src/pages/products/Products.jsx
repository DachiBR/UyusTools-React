import React from 'react';
import { Navbar, Footer } from '../../components';
import Cards from '../../container/productadditions/product-cards/Cards'; // Ensure you import Cards correctly
import './products.css';

const Products = ({ articles }) => {
  return (
    <>
      <Navbar />

      <div className="blog-heading">
        <h1>
          <span className="big-text"> პროდუქცია </span>
        </h1>
      </div>

      <Cards articles={articles} />
      <Footer />
    </>
  );
};

export default Products;



