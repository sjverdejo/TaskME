import { useState, useEffect } from 'react'
import '../assets/styles/Form.css'
import taskService from '../services/tasks'

function Form({tasks, setTasks, addForm, task}) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [createdDate, setCreatedDate] = useState('')

    function updateName(event) {
        setName(event.target.value)
    }

    function updateDesc(event) {
        setDescription(event.target.value)
    }

    function updateDate(event) {
        setDate(event.target.value)
    }

    function addNewTask() {

        // event.preventDefault()
        const dateCreated = new Date()

        const formattedDate = dateCreated.getFullYear() + '-' + dateCreated.getMonth() + '-' + dateCreated.getDate()

        const newTask = {
            name: name,
            description: description,
            datecreated: formattedDate,
            datedue: date
        }

        taskService
            .createTask(newTask)
            .then(returnedTask => {
                setTasks(tasks.concat(returnedTask))
            })

        alert('Added new task.')
    }

    function updateCurrentTask() {
        const id = task.id
        console.log(task)

        const updatedTask = {
            name: name,
            description: description,
            datecreated: createdDate,
            datedue: date
        }
        taskService
            .updateTask(id, updatedTask)
            .then(returnedTask => {
                setTasks(tasks.map(task => task.id !== id ? note : returnedTask))
            })  
            
        alert('Updated task.')
    }

    function setEverything(name, desc, date, dateCreated) {
        setName(name)
        setDescription(desc)
        setDate(date)
        setCreatedDate(dateCreated)
    }

    // if (addForm) {
    //     return (
    //         <div className='Form-Container'>
    //             <form onSubmit={addNewTask}>
    //                 <label>Task Name:</label>
    //                 <input className='text-input' value={name} type='text' onChange={updateName} required />
    //                 <label>Task Description:</label>
    //                 <textarea className='text-input' value={description} onChange={updateDesc} required />
    //                 <label>Task Due Date</label>
    //                 <input className='text-input' value={date} type='date' onChange={updateDate} required/>
    //                 <input className='sbmt' type='submit' value='Add New Task'/>
    //             </form>
    //         </div>
    //     )
    // } else {
    //     const fixedDateDue = task.datedue.split('T')
    //     const taskName = task.name
    //     const desc = task.description
    //     const fixedCreatedDate = task.datecreated.split('T')

    //     useEffect(()=> {
    //         setEverything(taskName, desc, fixedDateDue[0], fixedCreatedDate[0])
    //     },[])
        
    //     return (
    //         <div className='Form-Container'>
    //             <form onSubmit={updateCurrentTask}>
    //                 <label>Task Name:</label>
    //                 <input value={name} type='text' onChange={updateName} required />
    //                 <label>Task Description:</label>
    //                 <textarea value={description} onChange={updateDesc} required />
    //                 <input value={createdDate} type='date' readOnly hidden />
    //                 <label>Task Due Date</label>
    //                 <input value={date} type='date' onChange={updateDate} required/>
    //                 <input type='submit' value='Update'/>
    //             </form>
    //         </div>
    //     )
    // }

    if (!addForm) {
        const fixedDateDue = task.datedue.split('T')
        const taskName = task.name
        const desc = task.description
        const fixedCreatedDate = task.datecreated.split('T')

        useEffect(()=> {
            setEverything(taskName, desc, fixedDateDue[0], fixedCreatedDate[0])
        },[])
    }

        return (
            <div className='Form-Container'>
                <form onSubmit={addForm ? addNewTask : updateCurrentTask}>
                    <label>Task Name:</label>
                    <input className='text-input' value={name} type='text' onChange={updateName} required />
                    <label>Task Description:</label>
                    <textarea className='text-input' value={description} onChange={updateDesc} required />
                    <label>Task Due Date</label>
                    <input className='text-input' value={date} type='date' onChange={updateDate} required/>
                    <input value={createdDate} type='date' readOnly hidden />
                    <input className='sbmt' type='submit' value={addForm ? 'Add New Task' : 'Update Task' }/>
                </form>
            </div>
        )
    }


export default Form