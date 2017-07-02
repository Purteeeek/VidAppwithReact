import React, { Component } from 'react';

const VideoListItem = ({video,clickedVideo}) => {
	const imageUrl = video.snippet.thumbnails.default.url;
	const videoTitle = video.snippet.title;
	
	return (
		<li onClick={ () => clickedVideo(video)} className = "list-group-item">
			<div className = "video-list media">
				<div className = "media-left">
					<img className = "media-object" src={imageUrl} />
				</div>
				<div className="media-body">
					<div className="media-heading"> {videoTitle} </div>
				</div>
			</div>
		</li>
		);
};

export default VideoListItem;
