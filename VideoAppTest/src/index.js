import _ from 'lodash';
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//App classes and src
import SeachBar from './components/search_bar';
import ContentList  from './components/content_list';
import ContentListItemDetail from './components/content_detail';
import Selectedhistory from './components/selected_history';


const API_KEY = 'AIzaSyAi0FrqaKo15nn5tAIgpBUAFe5LuIQbL8w';


// Create new Component Should produce some HTML

class App extends Component {
	
	
	constructor(props) {
	super(props);
	
	this.state = { 
	SearchResults: [],
	SelectedItem: null
	}
	
	this.contentSearch('Top Movies');
	
}

// Content Search  function
contentSearch(term) {
	
	YTSearch({key: API_KEY, term: term, maxResults: 8}, (data) => {
			this.setState(
			{SearchResults: data,
			SelectedItem: data[0]
			});
		});	
	
}


	
	render() {
		const contentSearch = _.debounce((term) => { this.contentSearch(term) }, 300);
		
		
	return (
	<div> 
		<SeachBar onSearchTermChange={contentSearch} />
		<h1>Videos To Watch</h1><h4>(Click below view video) </h4>
		<ContentList 
		onItemSelect={SelectedItem => this.setState({SelectedItem}) }
		SearchResults={this.state.SearchResults} />
		<ContentListItemDetail item={this.state.SelectedItem} />
		<h1>My Seleted Video History</h1>
		<Selectedhistory item={this.state.SelectedItem}  />
	</div>
	);
	}
}

// Take components put in the Dom

ReactDOM.render(<App />, document.querySelector('.container'));
