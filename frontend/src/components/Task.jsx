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
            <button onClick={deleteTask} className='btn'><img src={x} width={25}/></button>
            <Popup trigger=
                {<button> Update </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                <Form tasks={tasks} setTasks={setTasks} addForm={false} task={task}/>
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Cancel
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
            <p>{task.description}</p>
            <p>Date Started: {fixedDateCreated[0]}</p>
            <p>Date Due: {fixedDateDue[0]}</p>

        </div>
    )
}

export default Task