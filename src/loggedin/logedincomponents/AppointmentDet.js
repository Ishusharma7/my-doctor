import React from 'react'
import css from './Appointdet.module.css'
import Left from '../../Home Page/Cards/leftbar'

function AppointmentDet() {
  return (
    <div className={css.al}>
        <Left />
        <h2>Appointment Details</h2>
       <div className={css.ch}>
    <div>
        <h1>Patient name</h1>
    </div>
    <div>
    <h1>Patient's contact number</h1>
    </div>
    <div>
        <h1>Consulation Fee</h1>
    </div>
    <div>
        <h1>Doctor's name</h1>
    </div>
    <div>
        <h1>Appointment date</h1>
    </div>
    <div>
        <h1>Appointment time</h1>
    </div>
       </div>
       <div style={{display:'flex', gap:'2rem'}}>
          <button>Back</button>
          <button className={css.nex}>CONFIRM AND PROCEED</button>
        </div>
    </div>
  )
}

export default AppointmentDet