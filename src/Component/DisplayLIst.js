import React, { useContext, useState } from "react"
import { TodoContext } from "../Store/TodoContext"
import { ACTION } from '../Store/Reducer'


const Box =({id,todo,Male,Female}) =>{
    const [Mark, setMark] = useState(false);
    const {dispatch} = useContext(TodoContext)

    const onDelete=(id)=>{
       dispatch({
            type : ACTION.DEL,payload:{id:id}
       })
    }   

    return (
      <div className="BoxS">
        <div><input type={"checkbox"} onChange={()=>{setMark(!Mark)}} /></div>
        <div style={{color:`${(Mark)? "red" : 'black'}`}}>{todo} </div>
        <div>
        {(Male)? "MALE" :  ""}
        {(Female)? "FEMALE" :  ""}
        </div>
  
        <button onClick={()=>{onDelete(id)}}>Del</button>
      </div>
    )
  }
  

  
  function DisplayLIst() {

    const {state} = useContext(TodoContext)
    return (
        <div>
        <ul>

        {state.map(a=>{
          return(
            <React.Fragment key={a.id}>
              <li><Box  Male={a.Male} Female={a.Female} todo={a.todo} id={a.id}/></li>        
            </React.Fragment>
          )
        })}

        </ul>
      </div>
    )
  }
  
  export default DisplayLIst