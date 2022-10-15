import React,{useContext, useState} from 'react'
import { ACTION } from '../Store/Reducer'
import { TodoContext } from '../Store/TodoContext'


function InputBox() {
    const {dispatch} = useContext(TodoContext)
    const [text,setText ]= useState('')
    const [Male,setMale ]= useState(true)
    const [Female,setFemale ]= useState(false)
      
    const AddtoList = ()=>{
        dispatch({
            type : ACTION.ADD,
            payload: {item: {id : 0, todo: text , Male : Male, Female: Female }}
            
        })
    }


    return (
        <div>
            <div>
              <input type="text" placeholder='Enter your text' onChange={(e)=>{setText(e.target.value)}}/>
              <input type={"checkbox"}  checked={Male} onChange={()=>{ setMale(true) ; setFemale(false)}}/>
              <label>Male</label>
              <input type={"checkbox"} checked={Female} onChange={()=>{ setMale(false) ; setFemale(true)}}/>
              <label>Female</label>
              <button onClick={AddtoList}>Add to list</button>
            </div>
            
        </div>
      )

}

export default InputBox