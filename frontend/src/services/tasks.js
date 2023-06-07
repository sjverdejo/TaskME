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

export default {
    getAllTasks,
    createTask,
}
