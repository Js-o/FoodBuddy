class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view:'Login',
      friendsRatings:[],
      movie: null,
      friendRequests:[],
      pendingFriendRequests:[],
      myFriends:[],
      friendToFocusOn:'',
      individualFriendsMovies:[],
      potentialMovieBuddies:{},
      username: null,
      requestResponses:[],
      currentUser:null
    };
  }

  getCurrentFriends() {
    var that=this;
    console.log('testinggg')
    $.post('http://127.0.0.1:3000/getFriends',{test:'info'},function(a,b) {
       var final= a.sort(function(a,b){return b[1]-a[1]});
      that.setState({
        myFriends:final
      })
    })
  }

  acceptFriend(a) {
    var final=a;
    $('button').on('click',function() {
      console.log($(this).html());
    })
    console.log(final +'should be accepted')

    $.post('http://127.0.0.1:3000/accept',{personToAccept:final},function(a,b) {
      console.log(a,b)
    })
  }

  declineFriend(a) {
    var final=a;

    $.post('http://127.0.0.1:3000/decline',{personToDecline:final},function(a,b) {
      console.log(a,b)
    })
  }

  findMovieBuddies() {
    var that=this;
    $.post('http://127.0.0.1:3000/findMovieBuddies',{dummy:'info'},function(a,b) {
      var final=a.sort(function(a,b){return b[1]-a[1]})
console.log(that.state.myFriends,that.state.potentialMovieBuddies);

      that.setState({
        view:"FNMB",
        potentialMovieBuddies:final
      })
    })
  }

  changeView() {
    this.setState({
      view:"SignUp" 
    })
  }

  logInFunction(name,password) {
    this.setState({username: name})
    var that=this;
    console.log(name,password)

    $.post('http://127.0.0.1:3000/login',{name:name,password:password}).then(function(response) {
      
   
      if (response[0]==='it worked') {
          that.getCurrentFriends();
          
       console.log('hi')
          that.setState({
            view:'Home',
            currentUser:response[1]

          })
        }
       console.log('this.state.view after state is set again',that.state.view)
      }).catch(function(err) {console.log(err)})
    }

  enterNewUser(name,password) {
    console.log(name,password);
    $.post('http://127.0.0.1:3000/signup',{name:name,password:password}).then(function() {
      console.log('success'); 
      this.setState({username: name})
    }).catch(function() {console.log('error')})
  }

  getFriendMovieRatings() {
    var that=this;
    console.log('mooooovie');
    var movieName = document.getElementById("movieToView").value
    $.post('http://127.0.0.1:3000/getFriendRatings', { name: movieName }).then(function(response) {

      that.setState({
      view:"Home",
      friendsRatings:response
    })
    console.log('our response',that.state.friendsRatings)

    }).catch(function(err) {console.log(err)});
  }

  logout() {
    var that = this;
    $.post('http://127.0.0.1:3000/logout').then(function(response) {
      console.log(response);
      that.setState({
        view:"Login",
        friendsRatings:[]
      });
    });
  }

  sendWatchRequest(friend) {
    var movie= document.getElementById('movieToWatch').value;
    var toSend={requestee:friend, movie:movie};
    if (movie.length>0) {
      $.post('http://127.0.0.1:3000/sendWatchRequest', toSend ,function(a,b) {
        console.log(a,b);
      });
      document.getElementById('movieToWatch').value='';
    } else {
      console.log('you need to enter a movie to send a watch request!!!!')
    }
  }


  /////////////////////
  /////movie render
  /////////////////////
  //call searchmovie function
  //which gets passed down to the Movie Search 
  getMovie(query) {
    var options = {
      query: query
    };
    
    this.props.searchMovie(options, (movie) => {
      console.log(movie);
      this.setState({
        view:"MovieSearchView",
        movie: movie
      })
    })
  }
  //show the movie searched in friend movie list
  //onto the stateview of moviesearchview
  showMovie(movie) {
    this.setState({
      movie: movie
    })
  }
  /////////////////////
  /////Nav change
  /////////////////////
  changeViews(targetState) {
    console.log(this.state);
    if (targetState==='Friends'){
      this.getCurrentFriends();
    }

     if (targetState==="Inbox"){
       this.listPendingFriendRequests()
     }

    this.setState({
      view: targetState
    });
  }

  changeViewsMovie(targetState, movie) {
    this.setState({
      view: targetState,
      movie: movie
    });
  }

  changeViewsFriends(targetState, friend) {
    this.setState({
      view: targetState,
      friendToFocusOn: friend
    });
  }


  buddyRequest(a) {
    console.log('callingbuddy')
    console.log(a);
    $.post('http://127.0.0.1:3000/sendRequest',{name:a},function(a,b) {
     console.log('a','b');
    });
  }


  sendRequest() {
    var person=document.getElementById('findFriendByName').value;
    if (person.length===0) {
      $("#enterRealFriend").fadeIn(1000);
      $("#enterRealFriend").fadeOut(1000);
    } else {
      $.post('http://127.0.0.1:3000/sendRequest',{name:person},function(a,b) {
        console.log(a,b);
      });
      var person = document.getElementById('findFriendByName').value = '';
    }
  }

  listPendingFriendRequests() {
    var that=this;
    console.log('this should list friend reqs')
    $.post('http://127.0.0.1:3000/listRequests',function(response,error) {
      console.log('Response I get!!!!!!!',response);
var top=[]
var bottom=[]
console.log('tr',top,response)
      for (var i=0;i<response[0].length;i++){
if (response[0][i]['requestor']!==response[1] && response[0][i]['response']===null ){
          top.push(response[0][i]);
        }
      if (response[0][i]['requestor']===response[1] &&response[0][i]['response']!==null){
          bottom.push(response[0][i]);
        }
      }

console.log('tr',top,response)
      that.setState({
        pendingFriendRequests:top,
        requestResponses:bottom
      })


    });
  };

  focusOnFriend() {
    var that=this
    $('.individual').on('click',function() {
      console.log('focus triggered')
      var friendName = $(this).html();

      that.setState({
        view:'singleFriend',
        friendToFocusOn: friendName
      });

      $.get('http://127.0.0.1:3000/getFriendUserRatings',{friendName: friendName},function(response) {
        console.log('getting friend movies:', response);
        that.setState({
          individualFriendsMovies: response
        });
      });
    });
  }

  listPotentials() {
    console.log('this should list potential friends')
  }

  render() {
    if (this.state.view==='Login') {
      return ( < div > <h2 id='loginHeader'>Login</h2> <br/>
        < LogIn 
          ourFunction={this.changeView.bind(this)}
          logInFunction={this.logInFunction.bind(this)}
         / >  </div> );
    } else if (this.state.view==="SignUp") {
      return ( < div ><h2 id='loginHeader'>SignUp</h2> <br/>
        < SignUp enterUser={this.enterNewUser.bind(this)} onClick={this.changeViews.bind(this)}/ >
        < /div>
      );
    } 
    //this view is added for moviesearch rendering
    else if (this.state.view === "MovieSearchView") {
      return ( 
        <div> 
          <div>
            <Nav name={this.state.currentUser}
            find={this.findMovieBuddies.bind(this)}
            onClick={this.changeViews.bind(this)}
            logout={this.logout.bind(this)} 
            />
          </div>
          <div>
          <MovieRating 
            handleSearchMovie={this.getMovie.bind(this)} 
            movie={this.state.movie}
            />
          </div>
        </div>
      );
    } else if (this.state.view === "Inbox" ) {
      return (
        <div>
          <div>
            <Nav name={this.state.currentUser}
              find={this.findMovieBuddies.bind(this)}
              onClick={this.changeViews.bind(this)}
              logout={this.logout.bind(this)}
            />
          </div>
            <Inbox 
            responsesAnswered={this.state.requestResponses}
              logout={this.logout.bind(this)}  
              accept= {this.acceptFriend.bind(this)} 
              decline={this.declineFriend.bind(this)} 
              listRequests={this.listPendingFriendRequests.bind(this)} 
              pplWhoWantToBeFriends={this.state.pendingFriendRequests.map(
                function(a){return [a.requestor,a.requestTyp,a.movie===null?"": "("+a.movie+")"]})} 
            />
        </div>
      );
    } else if (this.state.view === "Friends" ) {
      return (
        <div>
          <div>
            <Nav name={this.state.currentUser}
              find={this.findMovieBuddies.bind(this)}
              onClick={this.changeViews.bind(this)}
              logout={this.logout.bind(this)}/>
          </div>
          <Friends 
            sendWatchRequest={this.sendWatchRequest.bind(this)} 
            fof= {this.focusOnFriend.bind(this)} 
            getFriends={this.getCurrentFriends.bind(this)} 
            myFriends={this.state.myFriends} 
            listPotentials={this.listPotentials.bind(this)} 
            logout={this.logout.bind(this)}  
            sendRequest={this.sendRequest.bind(this)}
          />
        </div>
      );
    }
    else if (this.state.view === "Home") {
      return (
        <div>
          <div>
            <Nav name={this.state.currentUser}
              find={this.findMovieBuddies.bind(this)} 
              onClick={this.changeViews.bind(this)}
              logout={this.logout.bind(this)}
            />
          </div>
          <Home 
            change={this.changeViewsMovie.bind(this)}
          />
        </div>
      );
    } else if (this.state.view === "SingleMovie") {
      return (
        <div>
          <div>
            <Nav name={this.state.currentUser}
              onClick={this.changeViews.bind(this)}
              logout={this.logout.bind(this)}
            />
          </div>
          <SingleMovieRating 
            currentMovie={this.state.movie}
            change={this.changeViewsFriends.bind(this)}
            fof={this.focusOnFriend.bind(this)}
          />
        </div>
      );
    } else if (this.state.view==='singleFriend') {
      return (
        <div>
          <SingleFriend 
            moviesOfFriend={this.state.individualFriendsMovies} 
            friendName={this.state.friendToFocusOn} 
            onClick={this.changeViews.bind(this)}
            change={this.changeViewsMovie.bind(this)}
          />
        </div>
      );
    } else if (this.state.view === "FNMB") {
      return (
        <div>
          <div>
            <Nav name={this.state.currentUser}
              find={this.findMovieBuddies.bind(this)} 
              onClick={this.changeViews.bind(this)}
              logout={this.logout.bind(this)}
            />
          </div>
          <FindMovieBuddy 
            buddyfunc={this.buddyRequest.bind(this)} 
            buddies={this.state.potentialMovieBuddies} 
          />
        </div>
      );
    } else if (this.state.view === "MyRatings") {
      return (
        <div>
          <div>
            <Nav name={this.state.currentUser}
              find={this.findMovieBuddies.bind(this)} 
              onClick={this.changeViews.bind(this)}
              logout={this.logout.bind(this)}
            />
          </div>
          <MyRatings 
            change={this.changeViewsMovie.bind(this)}
          />
        </div>
      );
    }
  }
}

window.App = App;
