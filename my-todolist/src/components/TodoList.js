import React from 'react'
import Todo from './Todo';

function TodoList({todos , setTodos , filterTodos}) {
  return (
    <div>
        <ul className="todo-list">
            {filterTodos.map((todo)=>(
              <Todo
                text={todo.text}
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
        </ul>
    </div>
  )
}

export default TodoList