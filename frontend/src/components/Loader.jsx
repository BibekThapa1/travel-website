import React from 'react'
import RiseLoader   from "react-spinners/RiseLoader";

const Loader = () => {
  return (
    <div className='loader-section container-fluid'>
<RiseLoader className='loader'   color="rgba(77, 193, 195, 1)" />
    </div>
  )
}

export default Loader