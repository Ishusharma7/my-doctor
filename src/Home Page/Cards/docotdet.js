import React from 'react'
import { useState, useEffect } from 'react'

function Dodet() {
  const [data , setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://my-doctors.net:8090/doctors');
        const data = response.data.data; // Accessing the 'data' array from the response
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
    {data.map((item, index)=>(
    <div>
        <div key={index}>
        <h1>{`${item.firstName} ${item.lastName}`}</h1>
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

export default Dodet