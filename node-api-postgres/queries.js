const Pool = require("pg").Pool;
const pool = new Pool({
  user: "dwightbenignus",
  host: "localhost",
  database: "televet_test",
  port: 5432,
});

const getPets = (request, response) => {
  pool.query("SELECT * FROM pets ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getPetbyId = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM pets WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getPets,
  getPetbyId,
};
