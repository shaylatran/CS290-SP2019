var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs290_transhay',
  password        : '9750',
  database        : 'cs290_transhay'
});

module.exports.pool = pool;
