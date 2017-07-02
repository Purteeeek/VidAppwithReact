import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import Config from '../config';
import SearchBar from './Components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './Components/video_list';
import VideoDetails from './Components/video_details';
import _ from 'lodash';
class App extends Component {

	constructor(props){
		super(props);


		this.state = { 
			videos: [] ,
			selectedVideo: {}
		} ;
		
		this.videoSearch("TVF")
		
		};


	videoSearch(term){
		YTSearch({key: Config.YOUTUBE_API , term: term}, (videos) => {
			this.setState({ 
				videos,
				selectedVideo: videos[0]
			});
		}
	)};	

		 
	

	render() {

		const searchVideoSearch = _.debounce((term) => {this.videoSearch(term)},500)
		return( 
			<div> 
				
				<SearchBar onSearchTermChange={searchVideoSearch}/>
				
				{this.state.videos.length ?<VideoDetails video = {this.state.selectedVideo}/>:<div> Loading ... </div>}
				
				<VideoList 
					clickedVideo={ (value) => this.setState({selectedVideo: value}) }
					videos={this.state.videos} />
			</div>
	);
	}
} 



ReactDOM.render(<App/>,document.getElementById('container')); 

