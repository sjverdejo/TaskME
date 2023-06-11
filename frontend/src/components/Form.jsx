import { useState } from 'react'
import '../assets/styles/Form.css'
import taskService from '../services/tasks'

function Form({tasks, setTasks}) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')

    function updateName(event) {
        setName(event.target.value)
    }

    function updateDesc(event) {
        setDescription(event.target.value)
    }

    function updateDate(event) {
        setDate(event.target.value)
    }

    function addNewTask(event) {

        // event.preventDefault()
        const dateCreated = new Date()

        const formattedDate = dateCreated.getFullYear() + '-' + dateCreated.getMonth() + '-' + dateCreated.getDate()

        const task = {
            name: name,
            description: description,
            datecreated: formattedDate,
            datedue: date
        }

        console.log(task)

        taskService
            .createTask(task)
            .then(returnedTask => {
                setTasks(tasks.concat(returnedTask))
                console.log(returnedTask)
            })
    }

    return (
        <div className='Form-Container'>
            <form onSubmit={addNewTask}>
                <label>Task Name:</label>
                <input className='text-input' value={name} type='text' onChange={updateName} required />
                <label>Task Description:</label>
                <textarea className='text-input' value={description} onChange={updateDesc} required />
                <label>Task Due Date</label>
                <input value={date} type='date' onChange={updateDate} required/>
                <input type='submit' />
            </form>
        </div>
    )
}

export default Form