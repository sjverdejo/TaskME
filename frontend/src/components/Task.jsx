import '../assets/styles/Task.css'

function Task({task}) {
    return (
        <div className='Task-Container'>
            <h2>Task Name: {task.name}</h2>
            <p>Task Description: {task.description}</p>
            <p>Date Created: {task.datecreated}</p>
            <p>Date Due: {task.datedue}</p>
        </div>
    )
}

export default Task