import React, {useState} from 'react'
import  TodoForm  from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo'
import EditTodoForm from './EditTodoForm';
uuidv4();


const TodoWrapper=() =>{
  let [todos,setTodos] = useState([])

let addTodo = todo =>{
  setTodos([...todos,{id: uuidv4(),task: todo,
  completed: false, isEditing: false},])
  
}
    let toggleComplete = (id) =>{
      setTodos(todos.map((todo) =>todo.id === id ?
        {...todo,completed: !todo.completed} : todo));
    }

    let deleteTodo = (id) =>{
      setTodos(todos.filter((todo) => todo.id !== id));
    }
    let editTodo = (id) =>{
      setTodos(todos.map((todo) => todo.id === id ? {...todo,isEditing:!todo.isEditing}: todo));
    }

    let editTask =(task,id)=>{
      setTodos(todos.map((todo) => todo.id === id ? {...
        todo,task, isEditing: !todo.isEditing} : todo));
    };

  return (
    <div className='TodoWrapper'>
      <h1>Get Thing Done</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo,index) => (
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task ={todo} />
        ) : (
          <Todo task={todo} key={index}
        toggleComplete={toggleComplete} deleteTodo=
        {deleteTodo} editTodo={editTodo} />
        )
        
      ))}
      
    </div>
  )
}

export default TodoWrapper
