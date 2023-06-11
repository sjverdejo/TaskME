import axios from 'axios'
const baseUrl = 'http://localhost:3001/tasks'

//GET method
function getAllTasks() {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

function createTask(newTask) {
    const request = axios.post(baseUrl, newTask)
    return request.then(response => response.data)
}

const updateTask = (taskId, newTask) => {
    const request = axios.put(`${baseUrl}/${taskId}`, newTask)
    return request.then(response => response.data)
}

function deleteTask(taskId) {
    const request = axios.delete(`${baseUrl}/${taskId}`)
    return request.then(response => response.data)
}


export default {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
}
