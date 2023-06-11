import '../assets/styles/Task.css'
import x from '../assets/images/x.png'
import taskService from '../services/tasks'
import Form from './Form'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

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

    const fixedDateCreated = task.datecreated.split('T')
    const fixedDateDue = task.datedue.split('T')

    return (
        <div className='Task-Container'>
            <h2>{task.name}</h2>
            {/* <button onClick={deleteTask} className='deleteBtn'><img src={x} width={25}/></button> */}
            <p>{task.description}</p>
            <div className='dates'>
                <div className='date'><h4>Date Started: </h4><p>{fixedDateCreated[0]}</p></div>
                <div className='date'><h4>Date Due: </h4><p>{fixedDateDue[0]}</p></div>
            </div>
            <div className='taskBtns'>
                <Popup trigger=
                    {<button className='taskBtn'> Update </button>}
                    modal nested>
                    {
                        close => (
                            <div>
                                <div>
                                    <Form tasks={tasks} setTasks={setTasks} addForm={false} task={task}/>
                                </div>
                                <div className='modalBtn'>
                                    <button onClick=
                                        {() => close()}>
                                            Cancel
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </Popup>
                <button className='taskBtn' onClick={deleteTask}>Delete</button>
            </div>
        </div>
    )
}

export default Task