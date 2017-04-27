import React, {Component} from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	const imageURL = video.snippet.thumbnails.default.url;
	const title = video.snippet.title;

	return(
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img src={imageURL} alt="" className="media-object"/>
				</div>
			</div>

			<div className="media-body">
				<div className="media-heading">
					{title}
				</div>
			</div>
		</li>
	)
}

export default VideoListItem;