import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import css from './doc.module.css';
import Button from '@mui/material/Button';
import { Pagination } from '@mui/material'; // Import Pagination from @mui/material

function Doc() {
  const [doctors, setDoctors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page

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
    <>
    <div className={css.a}>
      {displayeddocData.map((item, index) => (
        <div className={css.both} key={index}>
          <div>
            <AccountCircleIcon
              sx={{ fontSize: { xs: '50px', md: '150px' }, marginTop: '.5em' }}
            />
          </div>
          <div className={css.up}>
            <h1>{`${item.firstName} ${item.lastName}`}</h1>
            <p>
              {item.profile?.qualifications?.map((qualification) => qualification.name).join(' | ')}
              
              {item.profile?.specialities?.map((speciality) => speciality.name).join(', ')}
            </p>

            <div className={css.low}>
              <div className={css.lower}>
                <h2>Hospital</h2>
                <p>{/* hospi type here */}</p>
              </div>
              <div className={css.lower}>
                <h2>Languages</h2>
                <p>{item.profile?.languages?.length ? item.profile.languages.join(', ') : 'Not available'}</p>
              </div>
              <div className={css.lower}>
                <h2>Next available</h2>
                <p>Not available</p>
              </div>
            </div>
            <Button
              variant="outlined"
              sx={{
                width: { xs: '150px', md: '320px' },
                fontSize: { xs: '10px', md: '25px' },
                height: { xs: '30px', md: '60px' },
                borderRadius: '20px',
                color: '#3f51b5',
                borderColor: '#3f51b5',
                marginTop:'auto',
              }}
            >
              BOOK APPOINTMENT
            </Button>
          </div>
        </div>
      ))}
    </div>
      <Pagination
          count={Math.ceil(doctors.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          size='large'
          sx={{marginTop:'2rem',alignItems:'center', justifyContent:'center',display:'flex',marginBottom:'1rem'}}
        />
    </>
  );
}

export default Doc;
