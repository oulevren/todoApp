import React, {useState} from 'react'


const TodoForm=({addTodo})=> {
  let [value, SetValue] = useState("")

  let handleSubmit = e => {
    e.preventDefault();

    addTodo(value)

    SetValue("")
  }

  return (
    <div>
      
      <form className='TodoForm' onSubmit={handleSubmit} >
        <input type="text" className='todo-input' value={value}
        placeholder='What is the task today?' onChange={(e) => SetValue(e.target.value)} />
        <button type='submit' className='todo-btn'>Add Task</button>
      </form>
    </div>
  )
}

export default TodoForm
