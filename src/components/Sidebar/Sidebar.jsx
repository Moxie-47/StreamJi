import React from 'react'
import {categories} from '../../utils/constants'
import { Link } from 'react-router-dom'

const Sidebar = ({ category, setCategory }) => {
  return (
    <div className="absolute z-10 w-full h-14 md:w-24 md:h-full max-md:fixed flex md:flex-col items-center justify-evenly md:justify-center
    max-md:backdrop-filter bg-clip-padding backdrop-blur-md max-md:bg-opacity-60 dark:bg-opacity-80 bg-white dark:bg-neutral-900
    bottom-0 md:left-0 max-md:rounded-t-xl max-md:border-[1px] max-md:border-neutral-200 dark:max-md:border-neutral-700">
        {categories.map((genre, idx) => (
            <Link to={'/'} key={idx}>
              <button
                onClick={() => setCategory(genre.name)}
                className='flex flex-col items-center justify-center md:py-6 md:hover:scale-110'
              >
                  <span className={`text-black md:hover:text-blue-400
                  ${genre.name === category ? 'text-blue-400 max-md:dark:text-blue-500 md:dark:text-blue-500' : ' '} dark:text-white md:dark:hover:text-blue-400`}>
                    {genre.icon}
                  </span>
                  <span className='text-xs text-gray-700 dark:text-gray-300'>{genre.name}</span>
              </button>
            </Link>
        ))}
    </div>
  )
}

export default Sidebar