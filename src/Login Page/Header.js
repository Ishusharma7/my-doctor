import React from 'react'
import a from './images/a.svg'
import css from './header.module.css'

export default function Header () {
  return (
    <div>
        <div className={css.up}>
            <img 
            src = {a}
            alt='mylogo'
            width={250}
            />
        <div className={css.bet}>
            <input 
                placeholder='Select a Service'
            />
            <input 
                placeholder='Search a Doctor'
            />
            </div>

            <button>LOGIN</button>
        </div>
        <div className={css.down}>
        <h1>I am here</h1>
        </div>
    </div>
  )
}
