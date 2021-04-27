import React,{useEffect} from 'react';
import './App.css';
import HomeScreen from './HomeScreen'
import Login from './Login'
import {SelectUser} from './features/counter/userSlice'
import {useSelector,useDispatch} from 'react-redux'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { auth } from './firebase';
import {login,logout} from './features/counter/userSlice'
import ProfileScreen from './ProfileScreen.js'

function App() {
  const user = useSelector(SelectUser)
  const dispatch = useDispatch()
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
          
        }))
        console.log(userAuth)
      }else{
        dispatch(logout())
        
      }
      console.log(userAuth)
     
    })
    return unsubscribe;
  },[])
  return (
    
    <div className="App">
       <Router>
      {!user ? (<Login/>
      ) : (
        <Switch>
          <Route exact path="/">
            <HomeScreen/>
          </Route>
          <Route path="/profiles">
            <ProfileScreen/>
          </Route>
        </Switch>
    
      )}
      </Router>
    </div>
  );
}

export default App;
