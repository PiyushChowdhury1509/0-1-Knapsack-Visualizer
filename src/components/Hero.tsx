import Link from 'next/link';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
      <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
        Smart Knapsack Packing for E-commerce Warehouses
        <span className='bg-gradient-to-r from-blue-500 to-purple-800 text-transparent bg-clip-text'>
          {" "} using Dynamic Programming
        </span>
      </h1>
      <p className='mt-10 text-lg text-center text-neutral-400 max-w-4xl'>
        Optimize your packing efficiency with our smart knapsack solution, tailored for e-commerce warehouse operations.
      </p>
      <div className='flex justify-center my-10'>
        <Link href="/knapsack" className='bg-gradient-to-r from-blue-500 to-purple-800 py-3 px-6 rounded-md text-white font-semibold shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105'>
          Start
        </Link>
      </div>

      <div className='flex flex-col items-center mt-20 w-full px-6'>
        <h2 className='text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide text-orange-500'>
          Team Members
        </h2>
        <div className='mt-10 text-lg text-center text-neutral-300 max-w-4xl w-full'>
          <div className='flex justify-between mb-4'>
            <span className='text-left w-1/3'>VINAYAK NARAYAN SRIVASTAVA</span>
            <span className='text-center w-1/3'>1/22/FET/BCS/117</span>
            <span className='text-right w-1/3'>5CSB</span>
          </div>
          <div className='flex justify-between mb-4'>
            <span className='text-left w-1/3'>KIRTI SHARMA</span>
            <span className='text-center w-1/3'>1/22/FET/BCS/114</span>
            <span className='text-right w-1/3'>5CSB</span>
          </div>
          <div className='flex justify-between mb-4'>
            <span className='text-left w-1/3'>ARPIT VARYANI</span>
            <span className='text-center w-1/3'>1/22/FET/BCS/121</span>
            <span className='text-right w-1/3'>5CSB</span>
          </div>
          <div className='flex justify-between mb-4'>
            <span className='text-left w-1/3'>HIMANI SAHU</span>
            <span className='text-center w-1/3'>1/22/FET/BCS/119</span>
            <span className='text-right w-1/3'>5CSB</span>
          </div>
          <div className='flex justify-between mb-4'>
            <span className='text-left w-1/3'>PIYUSH CHOWDHURY</span>
            <span className='text-center w-1/3'>1/22/FET/BCS/116</span>
            <span className='text-right w-1/3'>5CSB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
