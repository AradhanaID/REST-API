const getEmployees = "SELECT * FROM employees";
const getEmployeeById = "SELECT * FROM employees WHERE id = $1";

const addEmployee = "INSERT INTO employees(name, department, gender, age) VALUES ($1, $2, $3, $4)";

const updateEmployee = "UPDATE employees SET name = $1, department = $2, gender = $3, age = $4 WHERE id = $5";

const deleteEmployeeById = "DELETE FROM employees WHERE id = $1";

const checkNameExists = "SELECT * FROM employees WHERE name = $1";

module.exports = {
	getEmployees,
	getEmployeeById,
	addEmployee,
	deleteEmployeeById,
	checkNameExists,
	updateEmployee
};
