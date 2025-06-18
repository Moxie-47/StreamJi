import React from 'react'
import VideoCard from './VideoCard'
import ChannelCard from '../Channel/ChannelCard'

const Videos = ({videos}) => {
  if(!videos?.length) return <div className="h-full flex items-center justify-center text-xl dark:text-white">Loading...</div>
  
  return (
    <div className="p-2 flex flex-wrap gap-4 md:gap-2 items-center justify-center" >
        {videos.map((item, idx) => (
          <div key={idx}>
            {item.id.videoId && <VideoCard video={item} /> }
            {item.id.channelId && <ChannelCard channel={item} />}
          </div>
        ))}
    </div>
  )
}

export default Videos