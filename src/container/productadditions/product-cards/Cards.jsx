/*import React from 'react'
import './cards.css';
import Article from '../article/Article';
import { product01, product02, product03, product04 } from './import';
const Cards = () => {
  return (


    <div className="gpt3__blog-container_groupB">
        <Article imgUrl={product01} date="Apr 8, 2024" text="Product Name 1" />
        <Article imgUrl={product02} date="Apr 8, 2024" text="Product Name 2" />
        <Article imgUrl={product03} date="Apr 8, 2024" text="Product Name 3" />
        <Article imgUrl={product04} date="Apr 8, 2024" text="Product Name 4" />

        <Article imgUrl={product04} date="Apr 8, 2024" text="Product Name 4" />
        <Article imgUrl={product04} date="Apr 8, 2024" text="Product Name 4" />
        <Article imgUrl={product04} date="Apr 8, 2024" text="Product Name 4" />
        <Article imgUrl={product04} date="Apr 8, 2024" text="Product Name 4" />

        <Article imgUrl={product04} date="Apr 8, 2024" text="Product Name 4" />
        <Article imgUrl={product04} date="Apr 8, 2024" text="Product Name 4" />
        <Article imgUrl={product04} date="Apr 8, 2024" text="Product Name 4" />
        <Article imgUrl={product04} date="Apr 8, 2024" text="Product Name 4" />

        <Article imgUrl={product04} date="Apr 8, 2024" text="Product Name 4" />
        <Article imgUrl={product04} date="Apr 8, 2024" text="Product Name 4" />
        <Article imgUrl={product04} date="Apr 8, 2024" text="Product Name 4" />
        <Article imgUrl={product04} date="Apr 8, 2024" text="Product Name 4" />

        <Article imgUrl={product04} date="Apr 8, 2024" text="Product Name 4" />
        <Article imgUrl={product04} date="Apr 8, 2024" text="Product Name 4" />


    </div>
  )
}

export default Cards
*/

        /*<Article imgUrl={product01} date="Apr 8, 2024" text="Product Name 5" />
        <Article imgUrl={product02} date="Apr 8, 2024" text="Product Name 6" />
        <Article imgUrl={product03} date="Apr 8, 2024" text="Product Name 7" />
        <Article imgUrl={product04} date="Apr 8, 2024" text="Product Name 8" />

        <Article imgUrl={product01} date="Apr 8, 2024" text="Product Name 9" />
        <Article imgUrl={product02} date="Apr 8, 2024" text="Product Name 10" />
        <Article imgUrl={product03} date="Apr 8, 2024" text="Product Name 11" />
        <Article imgUrl={product04} date="Apr 8, 2024" text="Product Name 12" />

        <Article imgUrl={product01} date="Apr 8, 2024" text="Product Name 13" />
        <Article imgUrl={product02} date="Apr 8, 2024" text="Product Name 14" />
        <Article imgUrl={product03} date="Apr 8, 2024" text="Product Name 14" />
        <Article imgUrl={product04} date="Apr 8, 2024" text="Product Name 15" />*/

        import React, { useState } from 'react';
import './cards.css';
import Article from '../article/Article';
import { product01, product02, product03, product04 } from './import';
import './cards.css'

const Cards = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const articles = [
    { imgUrl: product01, date: "Productis kodi 1", text: "Producti 1" },
    { imgUrl: product02, date: "Productis kodi 2", text: "Producti 2" },
    { imgUrl: product03, date: "Productis kodi 3", text: "Producti 3" },
    { imgUrl: product04, date: "Productis kodi 4", text: "Producti 4" }
  ];

  const filteredArticles = articles.filter(article =>
    article.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
<div className="container">
  <div className="search">
  <span class="search-icon material-symbols-outlined">search</span> 
    <input
      className="search-input"
      type="search"
      placeholder="Search..."
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
    />            
  </div>

  <div className="gpt3__blog-container_groupB">
    {filteredArticles.map((article, index) => (
      <Article
        key={index}
        imgUrl={article.imgUrl}
        date={article.date}
        text={article.text}
      />
    ))}
  </div>
</div>
  );
};

export default Cards;