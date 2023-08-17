import React from 'react'
import e from '../../Login Page/images/e.svg'
import css from './specialities.module.css'
function Special() {
   const data=[
        {src: e, para: "Bone Marrow" }
    ]
  return (
    <div>
        <h1>20+ Specialities</h1>
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
  )
}

export default Special