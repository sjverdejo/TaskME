import { useState } from 'react'
import '../assets/styles/Task.css'
import x from '../assets/images/x.png'
import taskService from '../services/tasks'

function Task({task, setTasks, tasks}) {
    const id = task.id

    function deleteTask() {
        const choice = window.confirm(
            "Are you sure you want to delete task " + id
        )

        if (choice) {
            taskService
            .deleteTask(id)
            .then(returnedTask => {
                console.log(returnedTask)
                setTasks(tasks.filter(task => task.id !== id))
            })
        }
    }

    return (
        <div className='Task-Container'>
            <h2>{task.name}</h2>
            <button onClick={deleteTask} className='btn'><img src={x} width={25}/></button>
            <p>{task.description}</p>
            <p>Date Started: {task.datecreated}</p>
            <p>Date Due: {task.datedue}</p>
        </div>
    )
}

export default Task