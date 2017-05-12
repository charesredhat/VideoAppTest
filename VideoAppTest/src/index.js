import _ from 'lodash';
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

//App classes and src
import SeachBar from './components/search_bar';
import ContentList  from './components/content_list';
import ContentListItemDetail from './components/content_detail';
import Selectedhistory from './components/selected_history';


const API_KEY = 'AIzaSyAi0FrqaKo15nn5tAIgpBUAFe5LuIQbL8w';


// Create new Component Should produce some HTML

class MainApp extends Component {
	
	
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
		<div className="topnav Black-background"> <h2>Videos To Watch   ( Click below to view and play video. ) </h2></div>
		<ContentList 
		onItemSelect={SelectedItem => this.setState({SelectedItem}) }
		SearchResults={this.state.SearchResults} />
		<ContentListItemDetail item={this.state.SelectedItem} />
		<Selectedhistory item={this.state.SelectedItem}  />
		
	</div>
	);
	}
}

/**/
class MainMenu extends React.Component {
   render() {
      return (
         <div >
            <div className="topnav">
               <div className="leftnav"><a href="/home">Home</a></div>
               <div className="rightnav"><a href="/history">Selected Video History</a></div>
            </div>
				
           {this.props.children}
         </div>
      )
   }
}


class History extends React.Component {
   render() {
      return (
         <div>
           <Selectedhistory   />
         </div>
      )
   }
}




// Take components put in the Dom

ReactDOM.render(
 <Router history = {browserHistory}>
      <Route path = "/" component = {MainMenu}>
         <IndexRoute component = {MainApp} />
         <Route path = "home" component = {MainApp} />
         <Route path = "history" component = {History} />
      </Route>
   </Router>
, document.querySelector('.container'));
