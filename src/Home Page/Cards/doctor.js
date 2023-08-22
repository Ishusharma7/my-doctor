import React from 'react'
import Left from './leftbar'
import d from '../../Login Page/images/d.svg'
import css from './doctor.module.css'
import Special from './specialities'
import Doc from './doctcard'
function Doctor() {
  return (
    <div>
        <Left />
        <div className={css.alll}>
        <img 
        src={d}
        className={css.imagee}
        width={2000}
        />
        <Special />
        <div className={css.dc}>
        <Doc />
        </div>
        </div>
        </div>
  )
}

export default Doctor