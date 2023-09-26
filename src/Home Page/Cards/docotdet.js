import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import css from './doctdet.module.css'
import Left from './leftbar'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Dodet() {
  const [data, setData] = useState({
    languages: [] // Provide an empty array as the default value for languages
  });
  const[slots,setSlots] = useState()
  
  const { id } = useParams();

  const getDoctorsDetails = async () => {
    try {
      const response = await fetch(`http://my-doctors.net:8090/doctors/${id}`);
      const responseData = await response.json();
      const details = {
        name: `${responseData.firstName} ${responseData.lastName}`,
        specialities: responseData.profile?.specialities?.map(elem => <li>{elem.name}</li>) || [],
        qualifications: responseData.profile?.qualifications?.map(elem => <li>{elem.name}</li>) || [],
        experience: responseData.profile?.experience?.map(elem =><li>{
          `${elem.position} at ${elem.place} (${elem.fromYear} - ${elem.toYear})`}</li>
        ) || [],
        languages: responseData.profile?.languages || [],
        reviews: 'No reviews available',
        averageRating: responseData.profile?.averageRating || 'N/A',
        experienceMonths: responseData.profile?.experienceMonths || 0,
        consultationFee: responseData.profile?.consultationFee || 'N/A',
        bio: responseData.profile?.bio || '',
      };
      setData(details);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctorsDetails();
  }, [id]);

  async function getSlots() {
    let response = await fetch(
      `http://my-doctors.net:8090/slots?doctorId=${id}&startTime[$gte]=2023-09-19T09:04:15.225Z&$sort[startTime]=1`,
      {
        method: "GET",
      }
    );
    response = await response.json();
  
    const slot = response.data.map((slot) => ({
      starttime: slot.startTime,
      endtime: slot.endTime,
    }));
  
    setSlots(slot);
  }
  
  useEffect(() => {
    getSlots();
  }, [id]);
  
  console.log('hero', slots)
  // Function to convert months to years
  const convertMonthsToYears = (months) => {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    return `${years} years ${remainingMonths > 0 ? `and ${remainingMonths} months` : ''}`;
  };


  return (
    <div className={css.al}>
    <Left />
    <div style={{display:'flex', gap:'3rem'}}>
      <div className={css.upleft}>
      <div>
        <h1>Dr. {data.name}</h1>
        <h2>{convertMonthsToYears(data.experienceMonths)} of experience</h2>
        </div>
        <p>{data.bio}</p>
        <div className={css.bt}>
        <button><FavoriteIcon sx={{fontSize:'2rem'}} /></button>
        <button><ShareIcon sx={{fontSize:'2rem'}} /></button>
        </div>
      </div>
      <div>
        <h1></h1>
      </div>
      </div>
      <div className={css.drpdwn}>
        <h3>Consultation Fee: {data.consultationFee}</h3>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontSize:{md:'1.5rem'},fontWeight:'bolder'}}>Specialities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:{md:'1.5rem'}}}>
           {data.specialities}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontSize:{md:'1.5rem'},fontWeight:'bolder'}}>Qualifications</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:{md:'1.5rem'}}}>
           {data.qualifications}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontSize:{md:'1.5rem'},fontWeight:'bolder'}}>Experience</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:{md:'1.5rem'}}}>
           {data.experience}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontSize:{md:'1.5rem'},fontWeight:'bolder'}}>Languages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:{md:'1.5rem'}}}>
            {data.languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontSize:{md:'1.5rem'},fontWeight:'bolder'}}>Reviews</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:{md:'1.5rem'}}}>
            {data.reviews}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontSize:{md:'1.5rem'},fontWeight:'bolder'}}>Write a review</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {/* make stars */}
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  );
}

export default Dodet;
