import React from 'react'
import { MoonLoader } from 'react-spinners'


const Spinner = () => {
  return (
    <div className='w-screen justify-center items-center h-screen'>
      <MoonLoader color="#36d7b7" />
    </div>
  );
}

export default Spinner