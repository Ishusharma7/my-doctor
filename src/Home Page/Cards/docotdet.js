import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';

function Dodet() {
  const [data , setData] = useState([]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://my-doctors.net:8090/doctors${id}`);
        const data = response.data.data; // Accessing the 'data' array from the response
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
console.log(data);
  return (
    <>
    {data.map((item, index)=>(
    <div>
        <div key={index}>
        <h1 style={{fontSize:'50rem', color:'black'}}>{`${item.firstName} ${item.lastName}`}</h1>
        <h2>experience</h2>
        <p>{item.bio}</p>
        <button>Like</button>
        <button>Share</button>
        </div>
        <div>
            <h1>No slots available</h1>
        </div>
    <div>
        <h3>Consultation Fee: {item.consultationFee}</h3>
    </div>
    </div>
    ))}
    </>
  )
}

export default Dodet;