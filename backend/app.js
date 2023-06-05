const express = require('express')
const app = express()
const db = require('./api/db/pg-sql')
const tasksRouter = require('./api/controllers/tasks')

app.use(express.json())

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/tasks', tasksRouter.getTasks)
app.get('/tasks/:id', tasksRouter.getTaskById)
app.post('/tasks', tasksRouter.createTask)
app.put('/tasks/:id', tasksRouter.updateTask)
module.exports = app