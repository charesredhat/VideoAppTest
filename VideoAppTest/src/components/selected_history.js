import React, {Component} from 'react';
import * as firebase from 'firebase';


// Selected History 
// Configue key for firebase database
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
// Ths will save selected movie to history 
const saveselectedmovie = data => database.child('selectedMovies').push(data, response => response);  

  
  
class Selectedhistory    extends Component {
	
	
	
  
  constructor(props) {
    super(props);
	
		
		this.state = {data:[],
		datatitle:[]
		,countpageload: 0
		,item:[]
		,checkstate: ""}; 
	
}
  
   componentWillReceiveProps(nextProps){
	    
	  this.state.countpageload++

	  
	  if(this.state.countpageload != 1)
	  {
		   console.log(" this.state.countpageload != 1 " + this.state.countpageload); 
		  saveselectedmovie({ channelTitle: nextProps.item.snippet.channelTitle, 
		  url: nextProps.item.snippet.thumbnails.default.url, 
		  description: nextProps.item.snippet.description });
	  
	  }
      console.log(this.state.data + ' test '); //you can log data from props here to check
	
	  
  }
  
  
    componentWillMount() {

	   const logsRef = firebase.database().ref().child('selectedMovies');
	
	logsRef.on('value', snap =>  {
  
		 snap.forEach(ss => {

		 this.state.data.push({
			url: ss.child('url').val(),
			channelTitle: ss.child('channelTitle').val(),
			description: ss.child('description').val()
		 });	  	
	  
   });

   this.setState({
		checkstate: "Check-State"
      });
});


  }
  

  
	render() {
	
	
		if (this.props.item) {
      return (
        <div></div>
      );
    } else {
      return (
		<div>
		   <h1>Selected Video History</h1>
			 <ul className="col-md-2 list-group-history">
			 {this.state.data.map((row, index) => (	 
			 <li className="list-group-item"> 
			<div className="video-list media">
				<div className="media-left">
				
				<img className="media-object" src={row.url}  />
				</div>
				<div className="media-body" >
					<div className="media-heading">{row.channelTitle} </div>
					<div className="media-heading">{row.description} </div>
					
				</div>	
			</div>
		</li> 
    ))}
	</ul>


    </div>
	);
    }
	
	}

}
  

export default Selectedhistory;