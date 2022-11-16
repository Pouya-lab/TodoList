import React from 'react'

function Todo({text , todos , setTodos , todo }) {

  const deleteHandler = () =>{
    setTodos(todos.filter((el)=> el.id !== todo.id))
  }

  const completeHandler = () =>{
    setTodos(todos.map((item)=>{
      if (item.id === todo.id) {
        return{
          ...item , complete : !item.complete
        }
      }
      return item
    }))
  }
      

  
  
  return (
    <div>
        <li className="todo">
            <div className={`text ${todo.complete ? 'completed' : '' }` }>{text}</div>
            
            <button className="buttons">
              <button onClick={completeHandler} className="btn-completed fa fa-check-square"/>
              <button onClick={deleteHandler} className="btn-trash fa fa-trash-o"/>
            </button>
        </li>
    </div>
  )
}

export default Todo