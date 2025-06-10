import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { fetchFromAPI } from "../../utils/fetchAPI";

function VideoFeed() {
  const { id } = useParams();
  const [videoData, setVideoData] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);

  useEffect(() => {
    // Fetch video details
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoData(data.items[0]));

    // Fetch related videos
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setRelatedVideos(data.items));
  }, [id]);

  if (!videoData?.snippet) {
    return <div className="h-full flex items-center justify-center text-xl">Loading...</div>;
  }

  const { snippet, statistics } = videoData;

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <div className="flex-1">
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls width="100%" />
        <h2 className="mt-4 text-lg font-bold">{snippet.title}</h2>
        <Link to={`/channel/${snippet.channelId}`}>
          <p className="text-blue-600">{snippet.channelTitle}</p>
        </Link>
        <div className="text-gray-600 text-sm mt-2">
          {parseInt(statistics.viewCount).toLocaleString()} views • {parseInt(statistics.likeCount).toLocaleString()} likes
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <h3 className="font-semibold mb-2">Related Videos</h3>
        {relatedVideos ? relatedVideos.map((video) =>
          video.id.videoId ? (
            <Link to={`/video/${video.id.videoId}`} key={video.id.videoId} className="block mb-2">
              <div className="flex gap-2 items-center">
                <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} className="w-20 rounded" />
                <div>
                  <div className="font-medium text-sm">{video.snippet.title.slice(0, 40)}</div>
                  <div className="text-xs text-gray-500">{video.snippet.channelTitle}</div>
                </div>
              </div>
            </Link>
          ) : null
        ) : <div>Loading...</div>}
      </div>
    </div>
  );
}

export default VideoFeed;
