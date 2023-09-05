import React, { useEffect, useState } from 'react';
import css from './specialities.module.css';
import Left from './leftbar';
import { Pagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function Special() {
  const [specialData, setSpecialData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(8); // Number of items per page

  const navigate = useNavigate();

  const getSpecializationData = async () => {
    try {
      const response = await fetch(
        "http://my-doctors.net:8090/specializations?$limit=100"
      );
      let data = await response.json();
      let returnedData = data.data;
      let totalSpecializations = data.total;
      const details = [];
      for (let elem in returnedData) {
        details.push({
          name: returnedData[elem]["name"],
          image: returnedData[elem]["imageUrl"],
          totalSpecializations: Math.floor(totalSpecializations / 10),
        });
      }
      setSpecialData(details);
    } catch (error) {
      // Handle error
    }
  };

  useEffect(() => {
    getSpecializationData();
  }, []);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  const displayedSpecialData = specialData
    .filter(item => item.name.toLowerCase().includes(searchKeyword.toLowerCase()))
    .slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchKeyword]);

  const handleSpDetail =(special)=>{
    navigate(`search?q=&sp=${special}`)
  }

  const handleItemsPerPageChange = (e) => {
    const selectedItemsPerPage = parseInt(e.target.value);
    setItemsPerPage(selectedItemsPerPage);
  };
  return (
    <div className={css.he}>
      <div className={css.l}>
        <Left />
      </div>
      <div>
        <div className={css.mee}>
          <h1>20+ Specialities</h1>
          <div className={css.em}></div>
          <input
            className={css.lee}
            placeholder='Search a Speciality'
            type='text'
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <select id={css.selector}  onChange={handleItemsPerPageChange} value={itemsPerPage}>
            <option value="8">8</option>
            <option value="12">12</option>
            <option value="16">16</option>
          </select>
        </div>
        <div className={css.main}>
          {displayedSpecialData.map((item, index) => (
            <div className={css.image} key={index}  onClick={() => handleSpDetail(item.name)}>
              <img
                alt='imge was here'
                src={`http://my-doctors.net/${item.image}`} 
                width={200}
              />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <Pagination
          count={Math.ceil(specialData.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          size='large'
          sx={{alignItems:'center', justifyContent:'center', display:'flex', marginTop:'2rem'}}
        />
      </div>
    </div>
  );
}

export default Special;
