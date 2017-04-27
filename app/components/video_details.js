import React, {Component} from 'react';

const VideoDetails = ({video}) => {
	if(!video){return <div>Loading...	</div>}

	const title = video.snippet.title;
	const desc = video.snippet.discription;
	const videoId = video.id.videoId;
	const videoURL = `https://www.youtube.com/embed/${videoId}`;
	return(
		<div className="video-details col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe src={videoURL} className="embed-responsive-item"></iframe>
			</div>
			<div className="details">
				<div>{title}</div>
				<div>{desc}</div>
			</div>
		</div>
	)
}

export default VideoDetails;