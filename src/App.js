import React,{useReducer} from 'react'

import './App.css'
import DisplayLIst from './Component/DisplayLIst'
import InputBox from './Component/InputBox'
import Reducer, { initialState } from './Store/Reducer'
import { TodoContext } from './Store/TodoContext'


function App() {
  const [state ,dispatch] = useReducer(Reducer,initialState)
 
 return(
  <TodoContext.Provider value={{state,dispatch}}>
      <InputBox/>
      <DisplayLIst/>
  </TodoContext.Provider>
 )
}

export default App