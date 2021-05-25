import {useEffect} from "react";
import HomePage from './pages/Homepage/Homepage'
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/Shop/Shop'
import SignInAndSignUp from './components/SignInAndSignUp/SignInAndSignUp'
import {auth} from './FirebaseConfig/FirebaseConfig'
import {createUserProfileDocument} from  './FirebaseConfig/FirebaseConfig'
import Header from './components/Header/Header'
import {setCurrentUser} from './Redux/user/userActions'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {currentUserSelctor} from './Redux/user/userSelectors'
import CheckOut from './components/CheckOut/CheckOut'
function App({currentUser,setCurrentUser}) {

  useEffect(()=>{
    //set a listener to see if there is a logged in user or not
    //if there is... the userauth returns an object
    //if not the the userauth returns null
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        //if the user has a doc in the database we return the user ref 
        //if not we create a doc to this user and also return the user ref 
        const userRef = await createUserProfileDocument(userAuth);

        //we set a listener to the user doc whenever it changes we set the user state to it
        userRef.onSnapshot(snapShot => {
           
            setCurrentUser(
              {
                id: snapShot.id,
                ...snapShot.data()
              }
             )
           
        });
      }
      //if there is no logged in user we set the user state to null
      // setUser(userAuth);
      setCurrentUser(userAuth)
    });
  },[])

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={Shop}/>
        <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUp />
              )
            }
          />
          <Route path="/checkout" component={CheckOut}/>
      </Switch>
    </div>
  );
}
const mapStateToProps=createStructuredSelector(
  {
    currentUser:currentUserSelctor
  }
)
export default connect(mapStateToProps,{setCurrentUser})(App);
