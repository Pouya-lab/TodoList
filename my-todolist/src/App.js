import {React , useEffect, useState} from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {

  const [inputText , setInputText] = useState('')
  const [todos , setTodos] = useState([])
  const [status , setStatus] = useState('All')
  const [filterTodos , setFilterTodos] = useState([])

  const filterHandler = () =>{
      switch(status){
        case 'Complete': 
        setFilterTodos(todos.filter((todo)=> todo.complete === true ))
        break
        case 'uncomplete' : 
        setFilterTodos(todos.filter((todo)=> todo.complete === false ))
        break
        default:
        setFilterTodos(todos)
        break
      }
  }

  useEffect(()=>{
    filterHandler()
    },[todos , status])

  return (
    <div>
      <div className="main">
        <div className="container">
          <header><h1 className="app-name">Pouya's Todo App</h1></header>
          <Form
            inputText={inputText}
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}
            setStatus={setStatus}
          />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            filterTodos={filterTodos}
          />

        
        </div>
      </div>
    </div>
  )
}

export default App