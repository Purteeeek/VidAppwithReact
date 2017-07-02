import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
	constructor(props){
		
		super(props);

		this.state = { term : "" } ;
	
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

	render() {
		return ( 
			<div className="search-bar">
			
			<input 
			value = {this.state.term}
			placeholder = "Enter your Text"
			onChange = { event => this.onInputChange(event.target.value)} />
			
			</div>
			);
		}

}

export default SearchBar ;