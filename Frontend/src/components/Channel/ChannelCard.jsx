import React from 'react'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../../utils/constants'

const ChannelCard = ({channel}) => {
  return (
    <div className='w-96 md:w-[358px] flex-col items-center justify-center p-2 rounded-xl '>
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <div className='flex items-center justify-center'>
          <img src={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channel?.snippet?.title} 
          className='w-48 md:w-[196px] h-48 md:h-[196px] rounded-full object-cover'/>
        </div>

        <div className='h-16 p-2 flex-col'>
          <p className='pt-3 text-sm dark:text-white font-medium text-center'>
            {channel?.snippet?.title}{' '}
          </p>

          {channel?.statistics?.subscriberCount && (
              <p className='mt-1 text-center text-xs text-gray-600 dark:text-gray-400'>
                  Subscribers: {parseInt(channel?.statistics?.subscriberCount).toLocaleString('en-US')}
              </p>
          )}
        </div>
      </Link>
    </div>
  )
}

export default ChannelCard