// import React from "react";
// import { Link } from "react-router-dom";

// function VideoCard({ video }) {
//     const videoId = video.id.videoId;
//     const snippet = video.snippet;

//     return (
//         <div className="w-full max-w-xs bg-white rounded shadow p-2">
//             <Link to={`/video/${videoId}`}>
//                 <img src={snippet.thumbnails.high.url} alt={snippet.title} className="rounded-lg w-full" />
//                 <p className="mt-2 font-semibold text-sm">{snippet.title.slice(0, 60)}</p>
//                 <p className="text-xs text-gray-500">{snippet.channelTitle}</p>
//             </Link>
//         </div>
//     )
// }

// export default VideoCard;


import React from 'react'
import { Link } from 'react-router-dom'
import { demoThumbnailUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoChannelUrl } from '../../utils/constants'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <div className='w-96 max-md:mx-4 md:w-[358px] flex-col p-2 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl transition-all duration-300 lg:hover:scale-95'>
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
        <img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
        className='w-full md:w-[358px] h-48 md:h-[196px] rounded-lg object-cover'/>
      </Link>

      <div className='h-16 p-2'>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <p className='text-xs dark:text-white font-medium'>
            {snippet?.title.slice(0, 90) || demoVideoTitle.slice(0, 90)}
          </p>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <p className='mt-1 text-xs text-gray-600 dark:text-gray-400'>
            {snippet?.channelTitle || demoChannelTitle}
          </p>
        </Link>
      </div>
    </div>
  )
}

export default VideoCard