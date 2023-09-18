import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Doct from './dcard'; // Renamed the imported component
import { Pagination } from '@mui/material';
import css from './docard.module.css'

function Doc() {
  const [doctors, setDoctors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items per page

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://my-doctors.net:8090/doctors?$limit=650');
        const data = response.data.data; // Accessing the 'data' array from the response
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayeddocData = doctors.slice(startIndex, endIndex);
  

  return (
    <div >
      {displayeddocData.map((doctor, index) => (
        <div key={index}>
        <Doct displayedData={displayeddocData} />
        </div>
      ))}
      <div className={css.hee}>
      <Pagination
          count={Math.ceil(doctors.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          size='large'
          sx={{marginTop:'2rem',alignItems:'center', justifyContent:'center',display:'flex',marginBottom:'1rem'}}
        />
        </div>
    </div>
  );
}

export default Doc;
