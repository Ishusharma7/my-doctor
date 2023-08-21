import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import css from './doc.module.css'
import Button from '@mui/material/Button';

function Doc() {
  const  data= [
        {h1: 'Dr. Dusty Huel', p:'Master in Cardiovascular Risk Factors | Bachelor of Dental Surgery | Bachelor of Medicine Critical Care Medicine 8 years experience', hospital: 'Not avaliable', lang: 'Hindi,Dogri,Kashmiri', aval:'Not available'}
    ]
  return (
    <div>
        {data.map((item, index) => (
            <div className={css.both} key={index}>
              <div><AccountCircleIcon  style={{ fontSize: 200, marginTop: '.5em' }} /></div>
              <div className={css.up}>
                <h1>{item.h1}</h1>
                <p>{item.p}</p>
                <div className={css.low}>
                <div className={css.lower}><h2>Hospital</h2><p>{item.hospital}</p></div>
                <div className={css.lower}><h2>Languages</h2><p>{item.lang}</p></div>
                <div className={css.lower}><h2>Next available</h2><p>{item.aval}</p></div>
                </div>
                <Button variant="outlined" style={{width: '15em', fontSize: '14px', height: '2em', borderRadius: '50px', color: '#3f51b5', borderColor: '#3f51b5'}}>BOOK APOINTMENT</Button>
              </div>
            </div>
          ))}
    </div>
  )
}

export default Doc