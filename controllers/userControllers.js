const db = require("../db");

const fetchDetails = async (req, res) => {
  const resp = await db.query("SELECT * from newtodos;");
  res.send(resp.rows[0]);
};

module.exports = {
  fetchDetails,
};
