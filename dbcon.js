/**
 * 
 * DELETE WHEN WE KNOW WE'RE NO LONGER USING SQL
 * 
 */

const mysql = require ('mysql');

let pool = mysql.createPool({
  host  : 'classmysql.engr.oregonstate.edu',
  user  : 'cs340_koonr',
  password: '2759',
  database: 'cs340_koonr'
});

module.exports.pool = pool;