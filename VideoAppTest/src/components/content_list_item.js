import React from 'react';

//Show show the list item deatails passed from the item object
//The onItemSelect event passes the selected item information back out
/*<div className="media-body" >
			<div className="media-heading">{title} </div>
		</div>*/
const ContentListItem = ({item, onItemSelect}) => {
 
	const imageUrl = item.snippet.thumbnails.medium.url;
	const title = item.snippet.title;
	const description = item.snippet.description;
	
	
	return (
	<li onClick={() => onItemSelect(item)} className="list-group-item" > 
	<div className="video-list media">
		<div className="media-left">
		<img className="media-object" src={imageUrl} alt={title} title={description} />
		</div>
		
		
	</div>
 </li>
	);
	
}




export default ContentListItem;