import React, {Component} from 'react';

class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = {
			term:''
		}
	}

	render(){
		return(
			<div className="search-bar col-xs-12 text-center">
				<input type="text" 
					value={this.state.term}
					onChange={event => {this.changeEventHandler(event.target.value)}}/>
			</div>
		)
	}

	changeEventHandler(term){
		this.setState({term});
		this.props.onChange(term);
	}
}

export default SearchBar;