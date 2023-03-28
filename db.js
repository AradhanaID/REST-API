const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'rest_api_example',
	password: 'postgres',
	port: 5432
})

module.exports = pool;

