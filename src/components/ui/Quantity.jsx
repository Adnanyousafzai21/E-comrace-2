
import React, { useState } from 'react'

const Quantity = () => {
    const [num, setNum]=useState(1)
    
  return (
    <div className='flex  gap-x-4'>
      <div onClick={()=>{setNum(num+1)}} className="flex justify-center items-center h-8 w-8 bg-sky-50 rounded-full ">
        +
      </div>
      <h4>{num}</h4>
      <div onClick={()=>{setNum(num-1)}} className="flex justify-center items-center h-8 w-8 bg-sky-50 rounded-full ">
        -
      </div>
    </div>
  )
}

export default Quantity
