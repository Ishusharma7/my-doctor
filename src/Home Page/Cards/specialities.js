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
        <h1>20+ Specialities</h1>
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
  )
}

export default Special