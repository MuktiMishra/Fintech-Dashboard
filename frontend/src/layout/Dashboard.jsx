import React from 'react'
import Chart from './Chart';
import ExpensePieChart from './ExpensePieChart';

const Dashboard = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='text-lg font-bold text-white m-4'>Hello Mukti!</h1>
      <div className='flex lg:flex-row flex-col  gap-4 text-white'>
       <div className='flex gap-4 text-white'>
         <div className='w-60 h-45 bg-gray-800 text-white text-center p-2 rounded-xl'>
          Total Transaction Of the Month
        </div>
        <div className='w-60 h-45 bg-gray-800 text-white text-center p-2 rounded-xl'>
          Total Transaction Of the Month 
        </div>
        {/* abh */}
       </div>
        <div className='flex gap-4 text-white'>
          <div className='w-60 h-45 bg-gray-800 text-white text-center p-2 rounded-xl'>
          Total Transaction Of the Month
        </div>
        <div className='w-60 h-45 bg-gray-800 text-white text-center p-2 rounded-xl'>
          Total Transaction Of the Month
        </div>
        </div>
        
      </div>
      <div className='flex flex-col lg:flex-row'>
        <div className='m-2 h-auto w-auto lg:h-65 lg:w-180 items-center justify-center'>
        {/* Charts display honge idar */}
        <Chart />
        </div>
        <div className='mt-2 lg:h-65 lg:w-70 h-auto w-auto'>
          <ExpensePieChart />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
