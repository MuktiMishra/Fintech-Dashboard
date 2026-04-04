import React from 'react'
import Chart from '../components/Chart';
import ExpensePieChart from '../components/ExpensePieChart';
import CardDisplay from '../components/Card';
import RecentTransactions from '../components/RecentTransactions';

const Dashboard = () => {
  return (
    <div className='flex flex-col w-full p-3 sm:p-4'>
      <h1 className='text-lg sm:text-xl font-bold text-white mb-4'>Hello Mukti!</h1>

      {/* Top cards */}
      <div className='flex flex-col gap-4 text-white'>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
          <div className='w-full min-h-[100px] bg-gray-800 text-center p-4 rounded-xl'>
            Total Transaction Of the Month
          </div>
          <div className='w-full min-h-[100px] bg-gray-800 text-center p-4 rounded-xl'>
            Total Transaction Of the Month
          </div>
          <div className='w-full min-h-[100px] bg-gray-800 text-center p-4 rounded-xl'>
            Total Transaction Of the Month
          </div>
          <div className='w-full min-h-[100px] bg-gray-800 text-center p-4 rounded-xl'>
            Total Transaction Of the Month
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className='flex flex-col xl:flex-row gap-4 mt-4'>
        <div className='w-full xl:flex-1 min-h-[300px]'>
          <Chart />
        </div>

        <div className='w-full xl:w-[380px] min-h-[300px]'>
          <ExpensePieChart />
        </div>
      </div>

      {/* Bottom section */}
      <div className='flex flex-col lg:flex-row w-full gap-4 mt-4'>
        <div className='w-full lg:w-[380px] xl:w-[420px]'>
          <CardDisplay />
        </div>
        <div className='w-full bg-[#0f172a] rounded-2xl p-4 text-white min-h-[200px]'>
          <RecentTransactions />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;