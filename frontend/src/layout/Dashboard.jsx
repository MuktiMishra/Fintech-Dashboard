import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='text-lg font-bold text-white m-4'>Hello Mukti!</h1>
      <div className='flex lg:flex-row flex-col  gap-4 text-white'>
       <div className='flex gap-4 text-white'>
         <div className='w-60 h-45 bg-gray-800 text-white text-center p-2 rounded-lg'>
          Total Transaction Of the Month
        </div>
        <div className='w-60 h-45 bg-gray-800 text-white text-center p-2 rounded-lg'>
          Total Transaction Of the Month
        </div>
       </div>
        <div className='flex gap-4 text-white'>
          <div className='w-60 h-45 bg-gray-800 text-white text-center p-2 rounded-lg'>
          Total Transaction Of the Month
        </div>
        <div className='w-60 h-45 bg-gray-800 text-white text-center p-2 rounded-lg'>
          Total Transaction Of the Month
        </div>
        </div>
        
      </div>
      <div>
        {/* Charts display honge idar */}
      </div>
    </div>
  )
}

export default Dashboard;
