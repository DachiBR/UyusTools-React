import React, { useState } from 'react';
import './cards.css';
import Article from '../article/Article';
import { 
  product00, product01, product02, product03, product04, 
  product05, product06, product07, product08, product09,
  product10, product11, product12, product13, product14, 
  product15, product16, product17, product18, product19,
  product20, product21, product22, product23, product24, 
  product25, product26, product27, product28, product29,
  product30, product31, product32, product33, product34, 
  product35, product36, product37, product38, product39,
  product40, product41, product42, product43, product44, 
  product45, product46, product47, product48, product49,
  product50, product51, product52, product53, product54, 
  product55, product56, product57, product58, product59,
  product60, product61, product62, product63, product64, 
  product65, product66, product67, product68, product69,
  product70, product71, product72, product73, product74, 
  product75, product76, product77, product78, product79,
  product80, product81, product82, product83, product84, 
  product85, product86, product87, product88, product89,
  product90, product91, product92, product93, product94, 
  product95, product96, product97, product98, product99,
  product100, product101, product102, product103, product104, 
  product105, product106, product107, product108, product109,
  product110, product111, product112, product113, product114, 
  product115, product116, product117, product118, product119,
  product120, product121, product122, product123, product124, 
  product125, product126, product127, product128, product129,
  product130, product131, product132, product133, product134, 
  product135, product136, product137, product138, product139,
  product140, product141, product142, product143, product144, 
  product145, product146, product147, product148, product149,
  product150, product151, product152, product153, product154, 
  product155, product156, product157, product158, product159,
  product160, product161, product162, product163, product164, 
  product165, product166, product167, product168, product169,
  product170, product171, product172, product173, product174, 
  product175, product176, product177, product178, product179,
  product180, product181, product182, product183, product184, 
  product185, product186, product187, product188, product189,
  product190, product191, product192, product193, product194, 
  product195, product196, product197, product198, product199,
  product200, product201, product202, product203
} from './import';

const Cards = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 16; // Maximum number of articles per page

  const articles = [
    { imgUrl: product00, date: "Date 00", text: "Text 00", category: "Category 1" },
    { imgUrl: product01, date: "Date 01", text: "Text 01", category: "Category 2" },
    { imgUrl: product02, date: "Date 02", text: "Text 02", category: "Category 1" },
    { imgUrl: product03, date: "Date 03", text: "Text 03", category: "Category 3" },
    { imgUrl: product04, date: "Date 04", text: "Text 04", category: "Category 2" },
    { imgUrl: product05, date: "Date 05", text: "Text 05", category: "Category 1" },
    { imgUrl: product06, date: "Date 06", text: "Text 06", category: "Category 2" },
    { imgUrl: product07, date: "Date 07", text: "Text 07", category: "Category 1" },
    { imgUrl: product08, date: "Date 08", text: "Text 08", category: "Category 3" },
    { imgUrl: product09, date: "Date 09", text: "Text 09", category: "Category 2" },
    { imgUrl: product10, date: "Date 10", text: "Text 10", category: "Category 1" },
    { imgUrl: product11, date: "Date 11", text: "Text 11", category: "Category 3" },
    { imgUrl: product12, date: "Date 12", text: "Text 12", category: "Category 2" },
    { imgUrl: product13, date: "Date 13", text: "Text 13", category: "Category 1" },
    { imgUrl: product14, date: "Date 14", text: "Text 14", category: "Category 3" },
    { imgUrl: product15, date: "Date 15", text: "Text 15", category: "Category 2" },
    { imgUrl: product16, date: "Date 16", text: "Text 16", category: "Category 1" },
    { imgUrl: product17, date: "Date 17", text: "Text 17", category: "Category 3" },
    { imgUrl: product18, date: "Date 18", text: "Text 18", category: "Category 2" },
    { imgUrl: product19, date: "Date 19", text: "Text 19", category: "Category 1" },
    { imgUrl: product20, date: "Date 20", text: "Text 20", category: "Category 3" },
    { imgUrl: product21, date: "Date 21", text: "Text 21", category: "Category 2" },
    { imgUrl: product22, date: "Date 22", text: "Text 22", category: "Category 1" },
    { imgUrl: product23, date: "Date 23", text: "Text 23", category: "Category 3" },
    { imgUrl: product24, date: "Date 24", text: "Text 24", category: "Category 2" },
    { imgUrl: product25, date: "Date 25", text: "Text 25", category: "Category 1" },
    { imgUrl: product26, date: "Date 26", text: "Text 26", category: "Category 3" },
    { imgUrl: product27, date: "Date 27", text: "Text 27", category: "Category 2" },
    { imgUrl: product28, date: "Date 28", text: "Text 28", category: "Category 1" },
    { imgUrl: product29, date: "Date 29", text: "Text 29", category: "Category 3" },
    { imgUrl: product30, date: "Date 30", text: "Text 30", category: "Category 2" },
    { imgUrl: product31, date: "Date 31", text: "Text 31", category: "Category 1" },
    { imgUrl: product32, date: "Date 32", text: "Text 32", category: "Category 3" },
    { imgUrl: product33, date: "Date 33", text: "Text 33", category: "Category 2" },
    { imgUrl: product34, date: "Date 34", text: "Text 34", category: "Category 1" },
    { imgUrl: product35, date: "Date 35", text: "Text 35", category: "Category 3" },
    { imgUrl: product36, date: "Date 36", text: "Text 36", category: "Category 2" },
    { imgUrl: product37, date: "Date 37", text: "Text 37", category: "Category 1" },
    { imgUrl: product38, date: "Date 38", text: "Text 38", category: "Category 3" },
    { imgUrl: product39, date: "Date 39", text: "Text 39", category: "Category 2" },
    { imgUrl: product40, date: "Date 40", text: "Text 40", category: "Category 1" },
    { imgUrl: product41, date: "Date 41", text: "Text 41", category: "Category 3" },
    { imgUrl: product42, date: "Date 42", text: "Text 42", category: "Category 2" },
    { imgUrl: product43, date: "Date 43", text: "Text 43", category: "Category 1" },
    { imgUrl: product44, date: "Date 44", text: "Text 44", category: "Category 3" },
    { imgUrl: product45, date: "Date 45", text: "Text 45", category: "Category 2" },
    { imgUrl: product46, date: "Date 46", text: "Text 46", category: "Category 1" },
    { imgUrl: product47, date: "Date 47", text: "Text 47", category: "Category 3" },
    { imgUrl: product48, date: "Date 48", text: "Text 48", category: "Category 2" },
    { imgUrl: product49, date: "Date 49", text: "Text 49", category: "Category 1" },
    { imgUrl: product50, date: "Date 50", text: "Text 50", category: "Category 3" },
    { imgUrl: product51, date: "Date 51", text: "Text 51", category: "Category 2" },
    { imgUrl: product52, date: "Date 52", text: "Text 52", category: "Category 1" },
    { imgUrl: product53, date: "Date 53", text: "Text 53", category: "Category 3" },
    { imgUrl: product54, date: "Date 54", text: "Text 54", category: "Category 2" },
    { imgUrl: product55, date: "Date 55", text: "Text 55", category: "Category 1" },
    { imgUrl: product56, date: "Date 56", text: "Text 56", category: "Category 3" },
    { imgUrl: product57, date: "Date 57", text: "Text 57", category: "Category 2" },
    { imgUrl: product58, date: "Date 58", text: "Text 58", category: "Category 1" },
    { imgUrl: product59, date: "Date 59", text: "Text 59", category: "Category 3" },
    { imgUrl: product60, date: "Date 60", text: "Text 60", category: "Category 2" },
    { imgUrl: product61, date: "Date 61", text: "Text 61", category: "Category 1" },
    { imgUrl: product62, date: "Date 62", text: "Text 62", category: "Category 3" },
    { imgUrl: product63, date: "Date 63", text: "Text 63", category: "Category 2" },
    { imgUrl: product64, date: "Date 64", text: "Text 64", category: "Category 1" },
    { imgUrl: product65, date: "Date 65", text: "Text 65", category: "Category 3" },
    { imgUrl: product66, date: "Date 66", text: "Text 66", category: "Category 2" },
    { imgUrl: product67, date: "Date 67", text: "Text 67", category: "Category 1" },
    { imgUrl: product68, date: "Date 68", text: "Text 68", category: "Category 3" },
    { imgUrl: product69, date: "Date 69", text: "Text 69", category: "Category 2" },
    { imgUrl: product70, date: "Date 70", text: "Text 70", category: "Category 1" },
    { imgUrl: product71, date: "Date 71", text: "Text 71", category: "Category 3" },
    { imgUrl: product72, date: "Date 72", text: "Text 72", category: "Category 2" },
    { imgUrl: product73, date: "Date 73", text: "Text 73", category: "Category 1" },
    { imgUrl: product74, date: "Date 74", text: "Text 74", category: "Category 3" },
    { imgUrl: product75, date: "Date 75", text: "Text 75", category: "Category 2" },
    { imgUrl: product76, date: "Date 76", text: "Text 76", category: "Category 1" },
    { imgUrl: product77, date: "Date 77", text: "Text 77", category: "Category 3" },
    { imgUrl: product78, date: "Date 78", text: "Text 78", category: "Category 2" },
    { imgUrl: product79, date: "Date 79", text: "Text 79", category: "Category 1" },
    { imgUrl: product80, date: "Date 80", text: "Text 80", category: "Category 3" },
    { imgUrl: product81, date: "Date 81", text: "Text 81", category: "Category 2" },
    { imgUrl: product82, date: "Date 82", text: "Text 82", category: "Category 1" },
    { imgUrl: product83, date: "Date 83", text: "Text 83", category: "Category 3" },
    { imgUrl: product84, date: "Date 84", text: "Text 84", category: "Category 2" },
    { imgUrl: product85, date: "Date 85", text: "Text 85", category: "Category 1" },
    { imgUrl: product86, date: "Date 86", text: "Text 86", category: "Category 3" },
    { imgUrl: product87, date: "Date 87", text: "Text 87", category: "Category 2" },
    { imgUrl: product88, date: "Date 88", text: "Text 88", category: "Category 1" },
    { imgUrl: product89, date: "Date 89", text: "Text 89", category: "Category 3" },
    { imgUrl: product90, date: "Date 90", text: "Text 90", category: "Category 2" },
    { imgUrl: product91, date: "Date 91", text: "Text 91", category: "Category 1" },
    { imgUrl: product92, date: "Date 92", text: "Text 92", category: "Category 3" },
    { imgUrl: product93, date: "Date 93", text: "Text 93", category: "Category 2" },
    { imgUrl: product94, date: "Date 94", text: "Text 94", category: "Category 1" },
    { imgUrl: product95, date: "Date 95", text: "Text 95", category: "Category 3" },
    { imgUrl: product96, date: "Date 96", text: "Text 96", category: "Category 2" },
    { imgUrl: product97, date: "Date 97", text: "Text 97", category: "Category 1" },
    { imgUrl: product98, date: "Date 98", text: "Text 98", category: "Category 3" },
    { imgUrl: product99, date: "Date 99", text: "Text 99", category: "Category 2" },
    { imgUrl: product100, date: "Date 100", text: "Text 100", category: "Category1"},
    { imgUrl: product101, date: "Date 101", text: "Text 101", category: "Category 1" },
    { imgUrl: product102, date: "Date 102", text: "Text 102", category: "Category 3" },
    { imgUrl: product103, date: "Date 103", text: "Text 103", category: "Category 2" },
    { imgUrl: product104, date: "Date 104", text: "Text 104", category: "Category 1" },
    { imgUrl: product105, date: "Date 105", text: "Text 105", category: "Category 3" },
    { imgUrl: product106, date: "Date 106", text: "Text 106", category: "Category 2" },
    { imgUrl: product107, date: "Date 107", text: "Text 107", category: "Category 1" },
    { imgUrl: product108, date: "Date 108", text: "Text 108", category: "Category 3" },
    { imgUrl: product109, date: "Date 109", text: "Text 109", category: "Category 2" },
    { imgUrl: product110, date: "Date 110", text: "Text 110", category: "Category 1" },
    { imgUrl: product111, date: "Date 111", text: "Text 111", category: "Category 3" },
    { imgUrl: product112, date: "Date 112", text: "Text 112", category: "Category 2" },
    { imgUrl: product113, date: "Date 113", text: "Text 113", category: "Category 1" },
    { imgUrl: product114, date: "Date 114", text: "Text 114", category: "Category 3" },
    { imgUrl: product115, date: "Date 115", text: "Text 115", category: "Category 2" },
    { imgUrl: product116, date: "Date 116", text: "Text 116", category: "Category 1" },
    { imgUrl: product117, date: "Date 117", text: "Text 117", category: "Category 3" },
    { imgUrl: product118, date: "Date 118", text: "Text 118", category: "Category 2" },
    { imgUrl: product119, date: "Date 119", text: "Text 119", category: "Category 1" },
    { imgUrl: product120, date: "Date 120", text: "Text 120", category: "Category 3" },
    { imgUrl: product121, date: "Date 121", text: "Text 121", category: "Category 2" },
    { imgUrl: product122, date: "Date 122", text: "Text 122", category: "Category 1" },
    { imgUrl: product123, date: "Date 123", text: "Text 123", category: "Category 3" },
    { imgUrl: product124, date: "Date 124", text: "Text 124", category: "Category 2" },
    { imgUrl: product125, date: "Date 125", text: "Text 125", category: "Category 1" },
    { imgUrl: product126, date: "Date 126", text: "Text 126", category: "Category 3" },
    { imgUrl: product127, date: "Date 127", text: "Text 127", category: "Category 2" },
    { imgUrl: product128, date: "Date 128", text: "Text 128", category: "Category 1" },
    { imgUrl: product129, date: "Date 129", text: "Text 129", category: "Category 3" },
    { imgUrl: product130, date: "Date 130", text: "Text 130", category: "Category 2" },
    { imgUrl: product131, date: "Date 131", text: "Text 131", category: "Category 1" },
    { imgUrl: product132, date: "Date 132", text: "Text 132", category: "Category 3" },
    { imgUrl: product133, date: "Date 133", text: "Text 133", category: "Category 2" },
    { imgUrl: product134, date: "Date 134", text: "Text 134", category: "Category 1" },
    { imgUrl: product135, date: "Date 135", text: "Text 135", category: "Category 3" },
    { imgUrl: product136, date: "Date 136", text: "Text 136", category: "Category 2" },
    { imgUrl: product137, date: "Date 137", text: "Text 137", category: "Category 1" },
    { imgUrl: product138, date: "Date 138", text: "Text 138", category: "Category 3" },
    { imgUrl: product139, date: "Date 139", text: "Text 139", category: "Category 2" },
    { imgUrl: product140, date: "Date 140", text: "Text 140", category: "Category 1" },
    { imgUrl: product141, date: "Date 141", text: "Text 141", category: "Category 3" },
    { imgUrl: product142, date: "Date 142", text: "Text 142", category: "Category 2" },
    { imgUrl: product143, date: "Date 143", text: "Text 143", category: "Category 1" },
    { imgUrl: product144, date: "Date 144", text: "Text 144", category: "Category 3" },
    { imgUrl: product145, date: "Date 145", text: "Text 145", category: "Category 2" },
    { imgUrl: product146, date: "Date 146", text: "Text 146", category: "Category 1" },
    { imgUrl: product147, date: "Date 147", text: "Text 147", category: "Category 3" },
    { imgUrl: product148, date: "Date 148", text: "Text 148", category: "Category 2" },
    { imgUrl: product149, date: "Date 149", text: "Text 149", category: "Category 1" },
    { imgUrl: product150, date: "Date 150", text: "Text 150", category: "Category 3" },
    { imgUrl: product151, date: "Date 151", text: "Text 151", category: "Category 2" },
    { imgUrl: product152, date: "Date 152", text: "Text 152", category: "Category 1" },
    { imgUrl: product153, date: "Date 153", text: "Text 153", category: "Category 3" },
    { imgUrl: product154, date: "Date 154", text: "Text 154", category: "Category 2" },
    { imgUrl: product155, date: "Date 155", text: "Text 155", category: "Category 1" },
    { imgUrl: product156, date: "Date 156", text: "Text 156", category: "Category 3" },
    { imgUrl: product157, date: "Date 157", text: "Text 157", category: "Category 2" },
    { imgUrl: product158, date: "Date 158", text: "Text 158", category: "Category 1" },
    { imgUrl: product159, date: "Date 159", text: "Text 159", category: "Category 3" },
    { imgUrl: product160, date: "Date 160", text: "Text 160", category: "Category 2" },
    { imgUrl: product161, date: "Date 161", text: "Text 161", category: "Category 1" },
    { imgUrl: product162, date: "Date 162", text: "Text 162", category: "Category 3" },
    { imgUrl: product163, date: "Date 163", text: "Text 163", category: "Category 2" },
    { imgUrl: product164, date: "Date 164", text: "Text 164", category: "Category 1" },
    { imgUrl: product165, date: "Date 165", text: "Text 165", category: "Category 3" },
    { imgUrl: product166, date: "Date 166", text: "Text 166", category: "Category 2" },
    { imgUrl: product167, date: "Date 167", text: "Text 167", category: "Category 1" },
    { imgUrl: product168, date: "Date 168", text: "Text 168", category: "Category 3" },
    { imgUrl: product169, date: "Date 169", text: "Text 169", category: "Category 2" },
    { imgUrl: product170, date: "Date 170", text: "Text 170", category: "Category 1" },
    { imgUrl: product171, date: "Date 171", text: "Text 171", category: "Category 3" },
    { imgUrl: product172, date: "Date 172", text: "Text 172", category: "Category 2" },
    { imgUrl: product173, date: "Date 173", text: "Text 173", category: "Category 1" },
    { imgUrl: product174, date: "Date 174", text: "Text 174", category: "Category 3" },
    { imgUrl: product175, date: "Date 175", text: "Text 175", category: "Category 2" },
    { imgUrl: product176, date: "Date 176", text: "Text 176", category: "Category 1" },
    { imgUrl: product177, date: "Date 177", text: "Text 177", category: "Category 3" },
    { imgUrl: product178, date: "Date 178", text: "Text 178", category: "Category 2" },
    { imgUrl: product179, date: "Date 179", text: "Text 179", category: "Category 1" },
    { imgUrl: product180, date: "Date 180", text: "Text 180", category: "Category 3" },
    { imgUrl: product181, date: "Date 181", text: "Text 181", category: "Category 2" },
    { imgUrl: product182, date: "Date 182", text: "Text 182", category: "Category 1" },
    { imgUrl: product183, date: "Date 183", text: "Text 183", category: "Category 3" },
    { imgUrl: product184, date: "Date 184", text: "Text 184", category: "Category 2" },
    { imgUrl: product185, date: "Date 185", text: "Text 185", category: "Category 1" },
    { imgUrl: product186, date: "Date 186", text: "Text 186", category: "Category 3" },
    { imgUrl: product187, date: "Date 187", text: "Text 187", category: "Category 2" },
    { imgUrl: product188, date: "Date 188", text: "Text 188", category: "Category 1" },
    { imgUrl: product189, date: "Date 189", text: "Text 189", category: "Category 3" },
    { imgUrl: product190, date: "Date 190", text: "Text 190", category: "Category 2" },
    { imgUrl: product191, date: "Date 191", text: "Text 191", category: "Category 1" },
    { imgUrl: product192, date: "Date 192", text: "Text 192", category: "Category 3" },
    { imgUrl: product193, date: "Date 193", text: "Text 193", category: "Category 2" },
    { imgUrl: product194, date: "Date 194", text: "Text 194", category: "Category 1" },
    { imgUrl: product195, date: "Date 195", text: "Text 195", category: "Category 3" },
    { imgUrl: product196, date: "Date 196", text: "Text 196", category: "Category 2" },
    { imgUrl: product197, date: "Date 197", text: "Text 197", category: "Category 1" },
    { imgUrl: product198, date: "Date 198", text: "Text 198", category: "Category 3" },
    { imgUrl: product199, date: "Date 199", text: "Text 199", category: "Category 2" },
    { imgUrl: product200, date: "Date 200", text: "Text 200", category: "Category 1" },
    { imgUrl: product201, date: "Date 201", text: "Text 201", category: "Category 3" },
    { imgUrl: product202, date: "Date 202", text: "Text 202", category: "Category 2" },
    { imgUrl: product203, date: "Date 203", text: "Text 203", category: "Category 1" },
  ];

  // Filter articles based on search query and selected category
  const filteredArticles = articles.filter(article =>
    (selectedCategory === 'all' || article.category === selectedCategory) && 
    article.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    }
  };

  const getPaginationButtons = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page when category changes
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
  };

  // Calculate the articles to show on the current page
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

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
        {currentArticles.map((article, index) => (
          <Article
            key={index}
            imgUrl={article.imgUrl}
            date={article.date}
            text={article.text}
          />
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
            onClick={() => handlePageChange(page)}
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
