import {useEffect} from "react";
import HomePage from './pages/Homepage/Homepage'
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/Shop/Shop'
import SignInAndSignUp from './components/SignInAndSignUp/SignInAndSignUp'
import Header from './components/Header/Header'
import {checkUserSession} from './Redux/user/userActions'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {currentUserSelctor} from './Redux/user/userSelectors'
import CheckOut from './components/CheckOut/CheckOut'
function App({currentUser,checkUserSession}) {
  
  useEffect(()=>{
    //check if the user is loggedin or not 
    checkUserSession()
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
export default connect(mapStateToProps,{checkUserSession})(App);
