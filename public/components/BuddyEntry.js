var BuddyEntry = (props) => {
//var test=props.Friend;
  return (
  <div className='collection-item row'>
    <div className="col s3">
    	<img className='profilethumnail' src={'https://unsplash.it/170/170/?random'}/>
    </div>
    <div id="Friend" className="buddy col s9">
   		<h3 className="buddyName">{props.Buddy}</h3>
   		<div className="buddyCompatibility">{(props.BuddyScore === 'Nothing to compare') ? 'Compatability: ' + props.Buddy + ' has not rated any movies' : 'Compatability: ' + props.BuddyScore }</div>
   		<a className="waves-effect waves-light btn" onClick={function(){props.buddyfunc(props.Buddy)}}>send friend request</a> 
  	</div>
  </div>
)
};

window.BuddyEntry = BuddyEntry;