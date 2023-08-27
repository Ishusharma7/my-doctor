import React from 'react'
import { useEffect, useState } from 'react';
import css from './specialities.module.css'
import Left from './leftbar'

function Special() {
  const [specialData, setSpecialData] = useState([]);
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
    }
  };
  useEffect(() => {
    getSpecializationData();
  }, []);
  return (
    <div className={css.he}>
    <div className={css.l}>
<Left  />
</div>
<div>
<div className={css.mee} >
        <h1>20+ Specialities</h1>
        <div className={css.em}></div>
        <input
         className={css.lee}
        placeholder='Search a Speciality'
        type='text'
         />
<select id={css.selector}>
  <option value="8">8</option>
  <option value="12">12</option>
  <option value="16">16</option>
</select>
        </div>
    <div className={ css.main}>
        {specialData.map((item, index) => (
            <div className={css.image} key={index}>
              <img
               src={`http://my-doctors.net/${item.image}`} 
                width={200}
               />
              <p>{item.name}</p>
            </div>
          ))}
    </div>
    </div>
    </div>
  )
}

export default Special