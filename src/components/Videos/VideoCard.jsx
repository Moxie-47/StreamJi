import React from "react";
import { Link } from "react-router-dom";

function VideoCard({ video }) {
    const videoId = video.id.videoId;
    const snippet = video.snippet;

    return (
        <div className="w-full max-w-xs bg-white rounded shadow p-2">
            <Link to={`/video/${videoId}`}>
                <img src={snippet.thumbnails.high.url} alt={snippet.title} className="rounded-lg w-full" />
                <p className="mt-2 font-semibold text-sm">{snippet.title.slice(0, 60)}</p>
                <p className="text-xs text-gray-500">{snippet.channelTitle}</p>
            </Link>
        </div>
    )
}

export default VideoCard;