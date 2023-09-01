import React, { useEffect, useState } from 'react';
import css from './specialities.module.css';
import Left from './leftbar';
import { Pagination } from '@mui/material';

function Special() {
  const [specialData, setSpecialData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState('');
  const itemsPerPage = 6; // Number of items per page


  const getSpecializationData = async () => {
    try {
      const response = await fetch(
        "http://my-doctors.net:8090/specializations"
      );
      let data = await response.json();
      let returnedData = data.data;
      let totalSpecializations = data.total;
      console.log(totalSpecializations);
      console.log(returnedData);
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
          <select id={css.selector}>
            <option value="8">8</option>
            <option value="12">12</option>
            <option value="16">16</option>
          </select>
        </div>
        <div className={css.main}>
          {displayedSpecialData.map((item, index) => (
            <div className={css.image} key={index}>
              <img
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
