'use client'
import React, { useState, useRef } from 'react';
import { Package, PlusCircle, Calculator, ClipboardCheck, Briefcase } from 'lucide-react';

const Knapsack: React.FC = () => {
  const [capacity, setCapacity] = useState('');
  const [values, setValues] = useState<string[]>(['']);
  const [weights, setWeights] = useState<string[]>(['']);
  const [result, setResult] = useState<any>(null);
  const resultRef = useRef<HTMLDivElement | null>(null);

  const handleCapacityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCapacity(e.target.value);
  };

  const handleValueChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = [...values];
    newValues[index] = e.target.value;
    setValues(newValues);
  };

  const handleWeightChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newWeights = [...weights];
    newWeights[index] = e.target.value;
    setWeights(newWeights);
  };

  const addItem = () => {
    setValues([...values, '']);
    setWeights([...weights, '']);
  };

  const knapsack = (capacity: number, values: number[], weights: number[]) => {
    const n = values.length;
    const dp = Array.from({ length: n + 1 }, () =>
      Array(capacity + 1).fill(0)
    );

    for (let i = 1; i <= n; i++) {
      for (let w = 0; w <= capacity; w++) {
        if (weights[i - 1] <= w) {
          dp[i][w] = Math.max(
            values[i - 1] + dp[i - 1][w - weights[i - 1]],
            dp[i - 1][w]
          );
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      }
    }

    let w = capacity;
    const picked = [];
    for (let i = n; i > 0 && w > 0; i--) {
      if (dp[i][w] !== dp[i - 1][w]) {
        picked.push(i - 1);
        w -= weights[i - 1];
      }
    }

    return { maxProfit: dp[n][capacity], picked, dp };
  };

  const handleSubmit = () => {
    const numCapacity = parseInt(capacity, 10);
    const numValues = values.map(Number);
    const numWeights = weights.map(Number);

    const result = knapsack(numCapacity, numValues, numWeights);
    setResult(result);

    setTimeout(() => {
      if (resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: 'smooth' });
      } 
      else {
        console.log('resultRef is null');
      }
    }, 100); 
  };

  return (
    <div className='min-h-screen flex flex-col items-center py-12 text-white bg-gray-900 relative'>
      <div className="absolute inset-0 bg-transparent z-0">
        <div className="grid grid-cols-12 gap-px">
          {Array.from({ length: 12 }).map((_, rowIndex) => (
            <div key={rowIndex} className="h-1 bg-gray-800"></div>
          ))}
        </div>
      </div>

      <h1 className='text-5xl sm:text-7xl lg:text-8xl text-center tracking-wide mb-8 text-amber-500 z-10'>
        0/1 Knapsack 
      </h1>
      
      <div className='w-full max-w-md flex flex-col items-center z-10'>
        <div className='w-full mb-6'>
          <label className='flex items-center text-lg mb-2'>
            <Package className='mr-2' />
            Enter Capacity
          </label>
          <input
            type='number'
            placeholder='Capacity'
            value={capacity}
            onChange={handleCapacityChange}
            className='p-4 text-white bg-gray-700 rounded-md w-full text-xl'
          />
        </div>

        <div className='w-full mb-6'>
          {values.map((value, index) => (
            <div key={index} className='flex flex-col mb-4'>
              <label className='flex items-center text-lg mb-2'>
                <ClipboardCheck className='mr-2 text-blue-500' />
                Item {index + 1} (Value)
              </label>
              <div className='flex flex-col sm:flex-row justify-between items-center'>
                <div className='w-full sm:w-1/2 mr-2'>
                  <label className='block mb-2 text-sm text-blue-400'>Value</label>
                  <input
                    type='number'
                    placeholder='Value'
                    value={value}
                    onChange={(e) => handleValueChange(index, e)}
                    className='p-4 text-white bg-gray-700 rounded-md w-full text-lg'
                  />
                </div>
                <div className='w-full sm:w-1/2 ml-2'>
                  <label className='block mb-2 text-sm text-red-400'>Weight</label>
                  <input
                    type='number'
                    placeholder='Weight'
                    value={weights[index]}
                    onChange={(e) => handleWeightChange(index, e)}
                    className='p-4 text-white bg-gray-700 rounded-md w-full text-lg'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='flex flex-col sm:flex-row sm:space-x-4'>
          <button
            onClick={addItem}
            className='flex items-center bg-gradient-to-r from-blue-500 to-purple-800 py-3 px-6 rounded-md text-white font-semibold shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105 text-lg'
          >
            <PlusCircle className='mr-2' />
            Add Item
          </button>
          <button
            onClick={handleSubmit}
            className='flex items-center bg-gradient-to-r from-green-500 to-teal-800 py-3 px-6 rounded-md text-white font-semibold shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105 text-lg'
          >
            <Calculator className='mr-2' />
            Calculate
          </button>
        </div>
      </div>

      {result && (
        <div ref={resultRef} className='mt-12 w-full max-w-4xl z-10'>
          <h2 className='text-4xl text-amber-500 mb-6'>Results</h2>
          <div className='text-center mb-8'>
            <h3 className='text-3xl text-white font-bold'>
              Maximum Profit: <span className='text-green-400'>{result.maxProfit}</span>
            </h3>
          </div>
          <div className='flex justify-center mb-8'>
            {values.map((_, index) => (
              <div
                key={index}
                className={`p-6 m-4 rounded-lg text-lg font-semibold shadow-2xl transform transition duration-300 ease-in-out
                ${result.picked.includes(index) ? 'bg-green-500' : 'bg-red-500'}`}
              >
                <Briefcase className='mx-auto text-4xl mb-2 text-white' />
                <div className='text-center'>
                  <span className="text-white">Bag {index + 1}</span>
                </div>
              </div>
            ))}
          </div>
          <h2 className='text-3xl text-amber-500 mb-4'>DP Table</h2>
          <div className='overflow-x-auto shadow-lg rounded-lg'>
            <table className='table-auto w-full text-center bg-gray-800 rounded-lg'>
              <thead className='bg-gray-700'>
                <tr>
                  <th className='border px-4 py-2 text-lg text-white'>Items</th>
                  {Array.from({ length: result.dp[0].length }).map((_, i) => (
                    <th key={i} className='border px-4 py-2 text-lg text-white'>{i}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {result.dp.map((row: number[], rowIndex: number) => (
                  <tr key={rowIndex} className='hover:bg-gray-700'>
                    <td className='border px-4 py-2 text-lg text-white'>Item {rowIndex}</td>
                    {row.map((cell, colIndex) => (
                      <td key={colIndex} className='border px-4 py-2 text-lg text-white'>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Knapsack;
