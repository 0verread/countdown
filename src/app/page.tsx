"use client"
import { useState } from "react";

export default function Home() {
  let [currentCounter, setCurrentCounter] = useState(305)
  const totalTimeInDay = 86400000;
  setTimeout(() => {
    const today = new Date();
    const thatDay = new Date(2023, 8, 13);
    const diff = Math.abs(today.getTime() - thatDay.getTime());
    const counterValue: number = Math.round( diff / totalTimeInDay);
    setCurrentCounter(counterValue);
  }, 1000)

  return (
    <main className="flex items-center justify-center h-screen">
      <section>
      <div className='relative z-0 mx-auto max-w-3xl pb-24 pt-12 text-center'>
          <div className='absolute -top-4 -z-10 flex w-full justify-center'>
            <div className='h-[310px] w-[310px] max-w-full animate-pulse-slow rounded-full bg-[#0a2e38] opacity-20 blur-[100px]' />
          </div>
          <div>
            <h1 className='mb-10 bg-gradient-to-t from-[#000000] to-[#0a2e38] bg-clip-text text-8xl text-transparent md:text-8xl'>
             {currentCounter} 
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
