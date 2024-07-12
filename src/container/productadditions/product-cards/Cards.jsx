import React, { useState, useEffect } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../firebase';

import './cards.css';
import Article from '../article/Article';

const Cards = ({ articles = [] }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [uploadedImages, setUploadedImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imagesRef = ref(storage, 'cards');
      const images = await listAll(imagesRef);
      const imageUrls = await Promise.all(images.items.map(item => getDownloadURL(item)));
      setUploadedImages(imageUrls);
    };
    fetchImages();
  }, []);

  const filteredArticles = articles.filter(article =>
    (selectedCategory === 'all' || article.category === selectedCategory) &&
    article.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArticles = filteredArticles.slice(startIndex, startIndex + itemsPerPage);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPaginationButtons = () => {
    const buttons = [];
    const maxPageButtons = 5;

    if (totalPages <= maxPageButtons) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, currentPage + 2);

      if (currentPage <= 3) {
        endPage = maxPageButtons;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - (maxPageButtons - 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        buttons.push(i);
      }

      if (startPage > 1) {
        buttons.unshift('...');
        buttons.unshift(1);
      }

      if (endPage < totalPages) {
        buttons.push('...');
        buttons.push(totalPages);
      }
    }

    return buttons;
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
        <button className={selectedCategory === 'all' ? 'active' : ''} onClick={() => handleCategoryChange('all')}>All Products</button>
        <button className={selectedCategory === 'category1' ? 'active' : ''} onClick={() => handleCategoryChange('category1')}>Category 1</button>
        <button className={selectedCategory === 'category2' ? 'active' : ''} onClick={() => handleCategoryChange('category2')}>Category 2</button>
      </div>

      <div className="gpt3__blog-container_groupB">
        {currentArticles.map((article, index) => (
          <Article
            key={index}
            imgUrl={article.imgUrl}
            date={article.date}
            text={article.text}
          />
        ))}
        {uploadedImages.map((imageUrl, index) => (
          <div key={index} className="uploaded-image">
            <img src={imageUrl} alt={`Uploaded ${index}`} />
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {getPaginationButtons().map((page, index) => (
          <button
            key={index}
            className={currentPage === page ? 'active' : ''}
            onClick={() => typeof page === 'number' && handlePageChange(page)}
            disabled={page === '...'}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Cards;
