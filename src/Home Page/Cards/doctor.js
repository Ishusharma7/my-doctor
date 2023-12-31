import React from 'react'
import Left from './leftbar'
import css from './doctor.module.css'
import Special from './specialities'
import Doc from './doctcard'
import { Link } from "react-router-dom";
import Imag from './imag'
import d from '../../Login Page/images/d.svg'
function Doctor() {
  return (
    <div className={css.all}>
        <div>
        <Left />
        </div>
        <div className={css.ingal}>
       <Imag  src={d} width='2200' />
       </div>
        <div className={css.g}>
        <Special />
       <Link to='/Specialities'> <h5>View all specialities</h5> </Link>
        </div>
        <div className={css.h}>
        <h3>100+ doctors</h3>
        <Doc />
        </div>
        </div>
 )
}

export default Doctor