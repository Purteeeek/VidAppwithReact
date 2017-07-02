import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import Config from '../../config';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetails from './video_details';
import _ from 'lodash';

import { browserHistory , Link} from 'react-router';
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
				<button onClick={browserHistory.push('/next')}/>
				<Link to="/app" label="App"/>
				{this.state.videos.length ?<VideoDetails video = {this.state.selectedVideo}/>:<div> Loading ... </div>}
				
				<VideoList 
					clickedVideo={ (value) => this.setState({selectedVideo: value}) }
					videos={this.state.videos} />
			</div>
	);
	}
} 
export default App;