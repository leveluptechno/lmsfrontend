import React from 'react'
import { IoBagHandle, IoPeople, IoBag, IoBagCheck, IoPersonAdd } from 'react-icons/io5';

function DashboardStartsGrid() {
  return (
    <div className='flex gap-3 justify-center  flex-col sm:w-full w-[20rem] sm:flex-col lg:flex-row sm:px-0 sm:mr-4'>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12  flex items-center justify-center bg-sky-500'>
            <IoPeople className='text-2xl text-white'/>
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-500 font-light'>Total Students</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>1846</strong>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
      <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
            <IoBag className='text-2xl text-white'/>
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-500 font-light'>Courses Offered</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>50</strong>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
      <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
            <IoBagCheck className='text-2xl text-white'/>
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-500 font-light'>Completed Courses</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>110</strong>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
      <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
            <IoBagHandle className='text-2xl text-white'/>
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-500 font-light'>Active Courses</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>20</strong>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
      <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
            <IoPersonAdd className='text-2xl text-white'/>
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-500 font-light'>New Registrations</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>101</strong>
          </div>
        </div>
      </BoxWrapper>
    </div>
  )
}

export default DashboardStartsGrid;

function BoxWrapper({children}) {
    return <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'> {children} </div>
}


