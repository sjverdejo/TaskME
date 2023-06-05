const db = require('../db/pg-sql')

//GET methods
const getTasks = (req, res) => {
    db.query('SELECT * FROM tasks ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
}

const getTaskById = (req, res) => {
    const id = parseInt(req.params.id)

    db.query('SELECT * FROM tasks WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }

        res.status(200).json(results.rows)
    })
}

//POST methods
const createTask = (req, res) => {
    const { name, description, datecreated, datedue } = req.body

    db.query('INSERT INTO tasks (name, description, datecreated, datedue) VALUES ($1, $2, $3, $4) RETURNING *', 
    [name, description, datecreated, datedue], (error, results) => {
        if (error) {
            throw error
        }

        res.status(201).send(`Task added with ID: ${results.rows[0].id}`)
    })
}

//PUT methods
const updateTask = (req, res) => {
    const id = parseInt(req.params.id)
    const { name, description, datecreated, datedue } = req.body

    db.query(
        'UPDATE tasks SET name = $1, description = $2, datecreated = $3, datedue = $4 WHERE id = $5',
        [name, description, datecreated, datedue, id],
        (error, results) => {
            if (error) {
                throw error
            }

            res.status(200).send(`Task modified with ID: ${id}`)
        }
    )
}

//DELETE methods
const deleteTask = (req, res) => {
    const id = parseInt(req.params.id)

    db.query('DELETE FROM tasks WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }

        res.status(200).send(`Task deleted with ID: ${id}`)
    })
}

module.exports = { 
    getTasks,
    getTaskById, 
    createTask,
    updateTask,
    deleteTask,
}