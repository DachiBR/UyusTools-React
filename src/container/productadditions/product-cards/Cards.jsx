
import React, { useState } from 'react';
import './cards.css';
import Article from '../article/Article';
import { product01, product02, product03, product04 } from './import';
import './cards.css';

const Cards = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all'); // Initialize with 'all'

  const articles = [
    { imgUrl: product01, date: "Productis kodi 1", text: "Producti 1", category: "category1" },
    { imgUrl: product02, date: "Productis kodi 2", text: "Producti 2", category: "category1" },
    { imgUrl: product03, date: "Productis kodi 3", text: "Producti 3", category: "category2" },
    { imgUrl: product04, date: "Productis kodi 4", text: "Producti 4", category: "category2" }
  ];

  const filteredArticles = articles.filter(article =>
    (selectedCategory === 'all' || article.category === selectedCategory) && 
    article.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container">
      <div className="search">
        <span className="search-icon material-symbols-outlined">search</span>
        <input
          className="search-input"
          type="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="categories">
        <button className={selectedCategory === 'all' ? 'active' : ''} onClick={() => handleCategoryChange('all')}>yvela productis naxva</button>
        <button className={selectedCategory === 'category1' ? 'active' : ''} onClick={() => handleCategoryChange('category1')}>Pirveli Kategoria</button>
        <button className={selectedCategory === 'category2' ? 'active' : ''} onClick={() => handleCategoryChange('category2')}>Meore kategoria</button>
        {/* Add more buttons for other categories as needed */}
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
  
