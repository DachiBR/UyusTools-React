import React from 'react';
import { Navbar, Footer} from '../../components';
import {Cards} from '../../container';
import './products.css';

const Products = () => {
  return (
    <>

      <Navbar />

      <div className="blog-heading">
  <h1 >
    <span className="big-text"> Our Products </span> 
  </h1>

</div>

      <Cards />
      <Footer />
   </>
  )
}

export default Products