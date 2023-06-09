const express = require('express')
const cors = require('cors')
const app = express()
const tasksRouter = require('./api/controllers/tasks')

app.use(cors())
app.use(express.json())

app.get('/tasks', tasksRouter.getTasks)
app.get('/tasks/:id', tasksRouter.getTaskById)
app.post('/tasks', tasksRouter.createTask)
app.put('/tasks/:id', tasksRouter.updateTask)
app.delete('/tasks/:id', tasksRouter.deleteTask)

module.exports = app