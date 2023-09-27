import React from 'react'
import css from './Appointdet.module.css'
import Left from '../../Home Page/Cards/leftbar'

function AppointmentDet({handleNext,handleBack}) {
  return (
    <div className={css.al}>
        <Left />
        <h2>Appointment Details</h2>
       <div className={css.ch}>
    <div className={css.ddet}>
        <h1>Patient name</h1>
        <h3>dsfds</h3>
    </div>
    <div className={css.ddet}>
    <h1>Patient's contact number</h1>
    <h3>dsfds</h3>
    </div>
    <div className={css.ddet}>
        <h1>Consulation Fee</h1>
        <h3>dsfds</h3>
    </div>
    <div className={css.ddet}>
        <h1>Doctor's name</h1>
        <h3>dsfds</h3>
    </div>
    <div className={css.ddet}>
        <h1>Appointment date</h1>
        <h3>dsfds</h3>
    </div>
    <div  className={css.ddet}>
        <h1>Appointment time</h1>
        <h3>dsfds</h3>
    </div>
       </div>
       <div style={{display:'flex', gap:'2rem'}}>
          <button className={css.bea} onClick={handleBack}>Back</button>
          <button onClick={handleNext} className={css.nex}>CONFIRM AND PROCEED</button>
        </div>
    </div>
  )
}

export default AppointmentDet