import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../../utils/fetchAPI";

function ChannelFeed() {
  const { id } = useParams();
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    // Fetch channel details
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannel(data.items[0]));

    // Fetch channel's videos
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data.items));
  }, [id]);

  if (!channel) return <div className="p-8 text-xl">Loading channel...</div>;

  return (
    <div className="p-4">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={channel.snippet.thumbnails.high.url}
          alt={channel.snippet.title}
          className="w-24 h-24 rounded-full"
        />
        <div>
          <h2 className="text-2xl font-bold">{channel.snippet.title}</h2>
          <p className="text-gray-500">{channel.snippet.customUrl}</p>
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">Channel Videos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos
          ? videos.map((video) =>
              video.id.videoId ? (
                <div key={video.id.videoId}>
                  <img
                    src={video.snippet.thumbnails.high.url}
                    alt={video.snippet.title}
                    className="rounded"
                  />
                  <div className="mt-1 font-medium text-sm">{video.snippet.title.slice(0, 60)}</div>
                </div>
              ) : null
            )
          : <div>Loading videos...</div>}
      </div>
    </div>
  );
}

export default ChannelFeed;
