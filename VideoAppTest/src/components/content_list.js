import React from 'react';
import ContentListitem  from './content_list_item';

const ContentList = (props) => {
	
	const SearchResultsitems = props.SearchResults.map((SearchResultitem) => {
		
		return (
		
		
		<ContentListitem 
		onItemSelect={props.onItemSelect}
		key={SearchResultitem.etag} 
		item={SearchResultitem} />
	
		);
		
	})
	
	return (
	<div className="nav-box">
	<ul className="nav navbar-nav navbar-left list-group-history-top" >
	{SearchResultsitems}
	</ul>
	</div>
	);
}


export default ContentList;