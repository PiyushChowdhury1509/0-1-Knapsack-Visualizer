'use client'
import Head from 'next/head';
import { useState } from 'react';
import Hero from '@/components/Hero';
import KnapsackInput from '@/components/KnapsackInput';
import KnapsackSolver from '@/components/KnapsackSolver';

export default function Home() {
  const [values, setValues] = useState<number[]>([]);
  const [weights, setWeights] = useState<number[]>([]);
  const [capacity] = useState<number>(50);

  const handleKnapsackSubmit = (inputValues: number[], inputWeights: number[]) => {
    setValues(inputValues);
    setWeights(inputWeights);
  };

  return (
    <div className="dark">
      <Hero/>
    </div>
  );
}
