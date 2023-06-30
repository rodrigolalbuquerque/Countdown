import React, { useEffect, useRef, useState } from 'react'
import s2 from './assets/s2.gif'

function App() {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdowndate = new Date(2023, 6, 30, 18, 0, 0).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdowndate - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
  
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    }
  });

  return (
    <div className='h-screen w-screen flex justify-center items-center bg-gradient-radial from-orange-100 to-red-300'>
      <div className='absolute border-2 border-black w-[90%] h-[85%]'></div>
      <section className='flex flex-col items-center relative bottom-20'>
        <img src={s2} className='opacity-80
        lg:w-4/12
        '/>
        <div className='text-8xl mb-20 font-love
        lg:text-7xl
        md:text-6xl
        sm:text-5xl
        xs:text-4xl
        3xs:text-xl
        '>Brenda e Rodrigo will meet in:</div>
        <div className='flex border-black border-2 p-10 xs:p-8 3xs:p-6'>
          <div className='flex flex-col items-center'>
            <p className='text-8xl md:text-7xl sm:text-6xl xs:text-4xl 2xs:text-3xl 3xs:text-2xl'>{timerDays}</p>
            <p className='text-3xl md:text-2xl xs:text-xl 3xs:text-base'>Dias</p>
          </div>
          <span className='text-8xl mx-8 md:text-7xl sm:text-6xl xs:text-4xl xs:mx-4 2xs:text-3xl 3xs:text-2xl 3xs:mx-1'>:</span>
          <div className='flex flex-col items-center'>
            <p className='text-8xl md:text-7xl sm:text-6xl xs:text-4xl 2xs:text-3xl 3xs:text-2xl'>{timerHours}</p>
            <p className='text-3xl md:text-2xl xs:text-xl 3xs:text-base'>horas</p>
          </div>
          <span className='text-8xl mx-8 md:text-7xl sm:text-6xl xs:text-4xl xs:mx-4 2xs:text-3xl 3xs:text-2xl 3xs:mx-1'>:</span>
          <div className='flex flex-col items-center'>
            <p className='text-8xl md:text-7xl sm:text-6xl xs:text-4xl 2xs:text-3xl 3xs:text-2xl'>{timerMinutes}</p>
            <p className='text-3xl md:text-2xl xs:text-xl 3xs:text-base'>minutos</p>
          </div>
          <span className='text-8xl mx-8 md:text-7xl sm:text-6xl xs:text-4xl xs:mx-4 2xs:text-3xl 3xs:text-2xl 3xs:mx-1'>:</span>
          <div className='flex flex-col items-center'>
            <p className='text-8xl md:text-7xl sm:text-6xl xs:text-4xl 2xs:text-3xl 3xs:text-2xl'>{timerSeconds}</p>
            <p className='text-3xl md:text-2xl xs:text-xl 3xs:text-base'>segundos</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
