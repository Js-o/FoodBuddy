var FriendEntry = (props) => {
  let score = props.Comp === 'No comparison to be made' ? 'No comparison to be made' : props.Comp + '%';
  return (
  <div className="FriendEntry collection-item row" >
  	<div className="col s3">
  		<img className='profilethumnail' src={'https://unsplash.it/170/170/?random'}/>
  	</div>
    <div id="Friend" className="friendEntry col s9">
    	<a className='friendEntryIndividual'><h3 className="friendName" onClick={function(){props.fof(props.Friend)}}>{props.Friend}</h3></a>  
    	<div className="friendEntryCompatability" >Compatability: {score}</div>
    </div>
  </div>
)};

window.FriendEntry = FriendEntry;