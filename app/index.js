import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';

//import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import style from './css/style.css';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';

const API_KEY = "AIzaSyDa03yfiQV4CAEmai3WhloZIM-Pi2K6WY0";

class App extends Component{
	constructor(props){
		super(props);

		this.state = {
			videos:[],
			selectedVideo:null
		}

		this.onChange('cartoon');
	}

	onChange(term){
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos:videos,
				selectedVideo: videos[0]
			}); //similar to this.setState({videos : videos })
		})
	}

	render(){
		const videoSearch = _.debounce( term => this.onChange(term), 300)
		return(
			<div>
				<SearchBar onChange={videoSearch}/>
				<VideoDetails video={this.state.selectedVideo} />
				<VideoList onVideoSelect={ selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));