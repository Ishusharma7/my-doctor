import React from 'react'
import e from '../../Login Page/images/e.svg'
import css from './specialities.module.css'
import Left from './leftbar'

function Special() {
   const data=[
        {src: e, para: "Bone Marrow" },
        {src: e, para: "Bone Marrow" },
        {src: e, para: "Bone Marrow" },
        {src: e, para: "Bone Marrow" },
        {src: e, para: "Bone Marrow" },
        {src: e, para: "Bone Marrow" },
        {src: e, para: "Bone Marrow" },
        {src: e, para: "Bone Marrow" },
        {src: e, para: "Bone Marrow" }
    ]
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
        {data.map((item, index) => (
            <div className={css.image} key={index}>
              <img
               src={item.src} 
                width={200}
               />
              <p>{item.para}</p>
            </div>
          ))}
    </div>
    </div>
    </div>
  )
}

export default Special