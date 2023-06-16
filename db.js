const Pool = require("pg").Pool;
const pool = new Pool({
    user:"postgres",
    password:'PpuTrmQWBuga2zZGUR8H',
    host:'containers-us-west-108.railway.app',
    port:'5487',
    database:"railway",
})

module.exports = pool;