import React from 'react';

const ContentListItemDetail = ({item}) => {
 if(!item) {
	 return <div> Loading .....</div>
	 
 }
 

 //this.firebaseRef = new Firebase('https://movedbtest.firebaseio.com/');
  console.log('snapshot', item.id.videoId);
 
 console.log(item);
  console.log(item.id.videoId);
  /*addLocation({ id: item.id.videoId, title: item.snippet.title }); */
      
  
	 const videoId = item.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;
	
	return (
	
	<div className="video-detail col-md-12"> 
	<div className="details">
		  <h5> {videoId} {url}</h5>
		 <h5> {item.snippet.title}</h5>
		 <h5> {item.snippet.desciption}</h5>
		</div>
		<div className="embed-responsive embed-responsive-16by9">
			  <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
		</div>
		 

		<div>
		</div>
	</div>


	);
	
}




export default ContentListItemDetail;





