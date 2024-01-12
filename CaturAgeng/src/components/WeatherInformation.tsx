import React, { ChangeEvent } from 'react';

interface WeatherInformationProps {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  stats: {
    isDay: number;
    temp: number;
    condition: string;
    time: string;
    location: string;
  };
}

const WeatherInformation: React.FC<WeatherInformationProps> = ({ setCity, stats }) => {
  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <>
      <div className='flex justify-between'>
        <input
          type='text'
          className='bg-slate-600 border border-slate-500 text-slate-200 placeholder-slate-400 text-md w-60 p-2 focus-outline-none focus:border-slate-400'
          placeholder='Enter Your City Name'
          onChange={handleCityChange}
          defaultValue='Jakarta'
        />
        <div className='m-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='white'
            className='w-6 h-6 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
          </svg>
        </div>
      </div>

      <div className='flex justify-center mt-8'>
        {stats.isDay !== 0 ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-14 h-14 text-yellow-300 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-12 h-12 text-slate-200 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z'
            />
          </svg>
        )}
      </div>

      <div className='flex justify-center items-center text-slate-200 mt-8 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out'>
        <p className='font-semibold text-[55px]'>
          {stats.temp}
          <span className='text-[33px]'>&deg;C</span>
        </p>
      </div>

      <div className='flex justify-center items-center text-slate-300 mt-8 text-[25px] text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out'>
        {stats.condition}
      </div>

      <div className='flex justify-center text-slate-400 mt-5 text-[15px]'>
        Today . {stats.time} | {stats.location}
      </div>
    </>
  );
};

export default WeatherInformation;
