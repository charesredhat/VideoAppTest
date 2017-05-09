import React from 'react';


/*
const config = {  
   apiKey: "AIzaSyCcEXyUbMbXc55uA8UAK-O1-7j9JcknROo",
    authDomain: "movedbtest.firebaseapp.com",
    databaseURL: "https://movedbtest.firebaseio.com",
    projectId: "movedbtest",
    storageBucket: "movedbtest.appspot.com",
    messagingSenderId: "1064503929224"
};


const database = firebase  
  .initializeApp(config)
  .database()
  .ref();
  
  
  // Added some "action" functions
// These will update our firebase database
const addLocation = data => database.child('selectedMovies').push(data, response => response);  
const updateLocation = (id, data) => database.child('selectedMovies/${id}').update(data, response => response);  
const actions = {  
  addLocation,
  updateLocation,
};
*/
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





