import {useEffect,lazy,Suspense} from "react";
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import {checkUserSession} from './Redux/user/userActions'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {currentUserSelctor} from './Redux/user/userSelectors'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

const HomePage =lazy(()=> import('./pages/Homepage/Homepage'))
const Shop =lazy(()=> import('./pages/Shop/Shop'))
const SignInAndSignUp =lazy(()=> import('./components/SignInAndSignUp/SignInAndSignUp'))
const CheckOut =lazy(()=> import('./components/CheckOut/CheckOut'))

function App({currentUser,checkUserSession}) {
  
  useEffect(()=>{
    //check if the user is loggedin or not 
    checkUserSession()
  },[])

  return (
    <div className="App">
      <Header/>
       <Switch>
        <ErrorBoundary>
        <Suspense fallback={<h1>loading......</h1>}>
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
          </Suspense>
        </ErrorBoundary>
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
