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
    
}

module.exports = { 
    getTasks,
    getTaskById, 
}