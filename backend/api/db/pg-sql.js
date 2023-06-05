const config = require('../../utils/config')
const Pool = require('pg').Pool

const db = new Pool(config.DB)

module.exports = db