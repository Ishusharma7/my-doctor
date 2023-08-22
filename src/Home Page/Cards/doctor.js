import React from 'react'
import Left from './leftbar'
import d from '../../Login Page/images/d.svg'
import css from './doctor.module.css'
import Special from './specialities'
import Doc from './doctcard'
function Doctor() {
  return (
    <div className={css.all}>
        <div className={css.l}>
        <Left />
        </div>
        <div>
        <img 
        src={d}
        className={css.imagee}
        width={3000}
        />
        <Special />
        <Doc />
        </div>
        </div>
 )
}

export default Doctor