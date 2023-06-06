import { useState, useEffect } from 'react'
import Header from './components/Header'
import Task from './components/Task'
import Form from './components/Form'
import './App.css'
import taskService from './services/tasks'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    taskService
      .getAll()
      .then(initialTasks => {
        setTasks(initialTasks)
      })
  }, [])

  console.log(tasks)

  return (
    <>
      <Header />
      <Form />
      {tasks.map(theTask => 
        <Task
          key={theTask.id}
          task={theTask}
        />  
      )}
    </>
  )
}

export default App
