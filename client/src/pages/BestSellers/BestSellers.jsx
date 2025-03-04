/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import AvatarSlider from './AvatarSlider'


function BestSellers() {
  return (
    <>
      <section className='p-4 py-24 text-white'>
        <div className='container max-w-6xl mx-auto overflow-hidden'>
          <div
           
           
            className='flex flex-col items-center md:items-start space-y-5'
          >
            {/* Content */}
            <h1
             
              className='text-2xl md:text-3xl font-medium'
            >
              Top những Creators và Sellers 
            </h1>
            <div
           
              className='flex justify-center md:justify-between w-full '
            >
              <p className='text-slate-400 '>
                Top những sellers NFT của tuần{' '}
              </p>
              <div
              
                className='md:flex items-center space-x-2 text-indigo-600 font-semibold hidden  '
              >
                <p>Xem thêm</p>
                <AiOutlineArrowRight size={12} />
              </div>
            </div>
            <AvatarSlider />
            <div className='md:hidden items-center space-x-2 text-indigo-600 font-semibold flex  '>
              <p>Xem thêm</p>
              <AiOutlineArrowRight size={12} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BestSellers
