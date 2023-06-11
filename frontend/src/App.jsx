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
      .getAllTasks()
      .then(initialTasks => {
        setTasks(initialTasks)
      })
  }, [])

  return (
    <>
      <Header />
      <div className='Form-Top'>
        <Form tasks={tasks} setTasks={setTasks} addForm={true}/>
      </div>
    
      <div className='bodyContent'>
        
        {tasks.map(theTask => 
          <Task
            key={theTask.id}
            task={theTask}
            setTasks={setTasks}
            tasks={tasks}
          />  
        )}
      </div>
    </>
  )
}

export default App
