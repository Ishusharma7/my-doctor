import React from 'react'
import css from './register.module.css'
import { useState } from 'react';

export default function Register() {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  return (
    <form>
        <div className={css.up}>
            <h1>Create an account</h1>
            <label>
            Full Name*
            <input 
                placeholder='Enter name'
                required
            />
            </label>
        </div>
        <div className={css.mid}>
            <h2>Gender*</h2>
            <label>
        <input
          type="radio"
          value="Male"
          className={css.radio}
          checked={selectedOption === 'Male'}
          onChange={handleOptionChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          value="Female"
          className={css.radio}
          checked={selectedOption === 'Female'}
          onChange={handleOptionChange}
        />
        Female
      </label>
      <label>
        <input
          type="radio"
          value="Other"
          className={css.radio}
          checked={selectedOption === 'Other'}
          onChange={handleOptionChange}
        />
        Other
      </label>
        </div>
        



        <div>
      <h2>Date of Birth*</h2>
      <select value={selectedDay} onChange={handleDayChange}>
        <option value="">Day</option>
        {daysInMonth.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
      <select value={selectedMonth} onChange={handleMonthChange}>
        <option value="">Month</option>
        {months.map((month, index) => (
          <option key={month} value={index + 1}>
            {month}
          </option>
        ))}
      </select>
      <select value={selectedYear} onChange={handleYearChange}>
        <option value="">Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>






        <div className={css.down}>
        <label>
          Mobile Number*
            <input
            placeholder='Enter Mobile Number'
             />
             </label>
             <label>
             Email*
             <input
            placeholder='abc@gmail.com'
             />
             </label>
             <label>
             Create Password*
             <input
            placeholder='Create Password'
             />
             </label>
             <label>
             Confirm Password*
             <input
            placeholder='Confirm Password'
             />
             </label>
        </div>
        <div className={css.last}>
        <button>Register</button>
        <h4>Already have an account? Sign in</h4>
        </div>
    </form>
  )
}
