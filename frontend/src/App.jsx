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

  return (
    <>
      <Header />
      <div className='body'>
        {/* <Form /> */}
        {tasks.map(theTask => 
          <Task
            key={theTask.id}
            task={theTask}
          />  
        )}
      </div>
    </>
  )
}

export default App
