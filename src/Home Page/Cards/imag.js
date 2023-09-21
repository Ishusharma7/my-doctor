import React from 'react'
function Imag({src, width}) {
  return (
    <div style={{alignItems:'end', justifyContent:'end', display:'flex'}}>
        <img
        src={src}
        width={width}
         />
    </div>
  )
}

export default Imag