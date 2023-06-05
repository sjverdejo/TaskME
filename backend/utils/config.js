require('dotenv').config()

const PORT = process.env.PORT
const DB = {
    user: process.env.DBUSER,
    host: process.env.DBHOST,
    database: process.env.DB,
    password: process.env.DBPASSWORD,
    port: process.env.DBPORT,
}

console.log(DB)

module.exports = { PORT, DB }