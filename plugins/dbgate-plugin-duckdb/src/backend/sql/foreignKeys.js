module.exports = `SELECT * FROM duckdb_constraints() WHERE constraint_type = 'FOREIGN KEY'`;
