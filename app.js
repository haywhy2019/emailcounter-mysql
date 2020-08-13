
var mysql = require('mysql');
var faker = require('faker'); 

var connection = mysql.createConnection({
    host : 'localhost',
    port: 3306,
    user : 'root',
    password: 'stutern2020',
    database: 'join_us',
    insecureAuth: true
});


/* selecting data 
var q = 'select * from users' ; 

connection.query(q, function(error, results, fields) {
if(error) throw error;
console.log(results[0])
}) */

/* inserting data  */
/* var q = 'insert into users (email) values("rusty@gmail.com")' ; 

connection.query(q, function(error, results, fields) {
if(error) throw error;
console.log(results)
}) */

/* var person = {email: faker.internet.email()} ; 

connection.query('insert into users set ?',person,  function(error, results, fields) {
if(error) throw error;
console.log(results)
}) */

/* inserting lots of data */

/* var data = [];
for(var i = 0; i <= 500; i++){
data.push([
    faker.internet.email(),
    faker.date.past()
    ]);
}

var q = 'insert into users (email, created_at) values ?' ; 

connection.query(q, [data],function(error, results) { 
if(error) throw error;
console.log(results)
}) */

/* find the earliest date auser joined */

/* var q = 'select created_at as earliet_date,email from users order by created_at limit 1';
connection.query(q, function(error, result){
    if(error) throw (error)
    console.log(result)
}) */

/* challenge 2 */

/* var q = `select monthname(created_at) as month,
count(*) as count from users 
group by month order by count desc`;
connection.query(q, function(error, result){
    if(error) throw (error)
    console.log(result)
}) */

/* //challenge 3 */

var q = `select monthname(created_at) as month,
count(*) as count from users 
group by month order by count desc`;
connection.query(q, function(error, result){
    if(error) throw (error)
    console.log(result)
})
connection.end();
