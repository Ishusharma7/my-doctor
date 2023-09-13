import React from 'react';
import css from './doc.module.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';


const Doct = ({ displayedData }) => {

  const navigate = useNavigate();

  return (
    <div className={css.a}>
      {displayedData && displayedData.length > 0 ? (
  displayedData.map((item) => (
        <div className={css.both} key={item.id}>
          <div>
            <Avatar color='disabled'
              sx={{ width: { xs: '50px', md: '150px' }, height:{ xs: '50px', md: '150px' }, mt:'5px' }}
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
                <p>
                  {item.hospital && item.hospital.length > 0
                    ? item.hospital.map((item) => item && item)
                    : "Not available"}
                </p>
              </div>
              <div className={css.lower}>
                <h2>Languages</h2>
                <p>
                  {item.profile?.languages?.length
                    ? item.profile.languages.join(', ')
                    : 'Not available'}
                </p>
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
                borderRadius: '30px',
                color: '#3f51b5',
                borderColor: '#3f51b5',
                marginTop: 'auto',
              }}
              onClick={() => navigate(`/doctors/${item._id}`)}
            >
              BOOK APPOINTMENT
            </Button>
          </div>
        </div>
      )) ): (
  <p>No data available</p>
)}
    </div>
  );
};

export default Doct;
