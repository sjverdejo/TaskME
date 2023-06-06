import '../assets/styles/Task.css'

function Task({task}) {
    
    return (
        <div className='Task-Container'>
            <h2>{task.name}</h2>
            <button>x</button>
            <p>Task: {task.description}</p>
            <p>Date Started: {task.datecreated}</p>
            <p>Date Due: {task.datedue}</p>
        </div>
    )
}

export default Task