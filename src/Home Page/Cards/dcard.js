import React from 'react';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import css from './doc.module.css';
import Button from '@mui/material/Button';


const Doct = ({ displayedData }) => {


  return (
    <div className={css.a}>
      {displayedData.map((item) => (
        <div className={css.both} key={item.id}>
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
                borderRadius: '20px',
                color: '#3f51b5',
                borderColor: '#3f51b5',
                marginTop: 'auto',
              }}
            >
              BOOK APPOINTMENT
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Doct;
