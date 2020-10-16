import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './navbar';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers  } from 'redux'

const initialState={
  result:15000,
  value:[]
}

const userReducer=(state={name:"BALL",age:22},action)=>{
  switch(action.type){
    case "setName":
        state={
          ...state,
          name:action.payload
       }
      break;
    case "setAge":
        state={
          ...state,
          age:action.payload
       }
      break;
    default:
  }
      return state
} 

const empReducer=(state={name:"BALL2",age:23},action)=>{
  switch(action.type){
    case "setName":
      state={
         ...state,
         name:action.payload
      }
      break;
    case "setAge":
        state={
          ...state,
          age:action.payload
       }
      break;
    default:
  }
      return state
} 


const store = createStore(combineReducers({userReducer, empReducer}));
store.subscribe(()=>{
  console.log("Update Store: ",store.getState())
})
store.dispatch({
  type:"setAge",
  payload:500
})

const AppWithRouter = () => (
  <BrowserRouter>
    <Navbar/>
    <App />
  </BrowserRouter>
)

ReactDOM.render(<AppWithRouter />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
