import React from 'react'
import Left from './leftbar'
import d from '../../Login Page/images/d.svg'
import css from './doctor.module.css'
import Special from './specialities'
import Doc from './doctcard'
function Doctor() {
  return (
    <div className={css.all}>
        <div>
        <Left />
        </div>
        <div  className={css.imagee}>
        <img 
        src={d}
        width={1800}
        />
        <div className={css.g}>
        <Special />
        <h5>View all specialities</h5>
        </div>
        <div className={css.dd}>
        <h5>360+ doctors</h5>
        <Doc />
        </div>
        </div>
        </div>
 )
}

export default Doctor