import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../../utils/fetchAPI";
import VideoCard from "../Videos/VideoCard";

function SearchFeed() {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then(data => setVideos(data.items));
  }, [searchTerm]);

  return (
    <main className="flex-1 p-4 bg-white min-h-screen">
      <h2 className="text-xl font-bold mb-4">
        Search results for: <span className="text-blue-600">{searchTerm}</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {!videos
          ? <div className="text-gray-500">Loading...</div>
          : videos.map(video =>
              video.id.videoId ? (
                <VideoCard video={video} key={video.id.videoId} />
              ) : null
            )
        }
      </div>
    </main>
  );
}

export default SearchFeed;
