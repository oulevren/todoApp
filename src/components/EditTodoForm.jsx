import React, {useState} from 'react'


const EditTodoForm=({editTodo,task})=> {
  let [value, SetValue] = useState(task.task)

  let handleSubmit = e => {
    e.preventDefault();

    editTodo(value,task.id)

    SetValue("")
  }

  return (
    <div>
      
      <form onSubmit={handleSubmit} className='TodoForm'  >
        <input type="text" className='todo-input' value={value}
        placeholder='Update Task' onChange={(e) => SetValue(e.target.value)} />
        <button type='submit' className='todo-btn'>Update Task</button>
      </form>
    </div>
  )
}

export default EditTodoForm
