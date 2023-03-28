const pool = require("../../db");
const queries = require("./queries");

const getEmployees = (req, res) => {
	pool.query(queries.getEmployees, (error, results) => {
		if (error) {
			throw error;
		}
		res.status("200").json(results.rows);
	});
};

const getEmployeeById = (req, res) => {
	const id = parseInt(req.params.id);
	pool.query(queries.getEmployeeById, [id], (error, results) => {
		if (error) {
			throw error;
		}
		res.status("200").json(results.rows);
	});
};

const addEmployee = (req, res) => {
	const { name, department, gender, age } = req.body;

	// check if name already exist
	pool.query(queries.checkNameExists, [name], (error, results) => {
		if (results.rows.length) {
			res.send("Email already exists");
		} else {
			// add employee to database
			pool.query(queries.addEmployee, [name, department, gender, age], (error, results) => {
				if (error) throw error;
				res.status("201").send("Employee Added Successfully");
			});
		}
	});
};

const deleteEmployeeById = (req, res) => {
	const id = parseInt(req.params.id);
	pool.query(queries.getEmployeeById, [id], (error, results) => {
		if (!results.rows.length) {
			res.status(404).send("Employee Doesnt Exist In The Database");
		} else {
			pool.query(queries.deleteEmployeeById, [id], (error, results) => {
				if (error) throw error;
				res.status(200).send("Employee Removed Successfully");
			});
		}
	});
};

const updateEmployee = (req, res) => {
	const id = parseInt(req.params.id);
	const { name, department, gender, age } = req.body;
	pool.query(queries.getEmployeeById, [id], (error, results) => {
		if (!results.rows.length) {
			res.status(404).send("Employee Doesnt Exist In The Database");
		} else {
			pool.query(queries.updateEmployee, [name, department, gender, age, id], (error, results) => {
				if (error) throw error;
				res.status(200).send("Employee Updated Successfully");
			});
		}
	});
};
module.exports = {
	getEmployees,
	getEmployeeById,
	addEmployee,
	deleteEmployeeById,
	updateEmployee,
};
