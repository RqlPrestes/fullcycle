const express = require('express')
const app = express()
const mysql = require("mysql");
const port = 3000

const connection = mysql.createPool({
    host: "mysqldb",
    user: "root",
    password: "lala",
    database: "nodedb",
    port: 3306,
    insecureAuth: true,    
    connectionLimit: 10
}); 



app.get('/', async (req, res) => {
  const users1 = [];
    try {  
      const users = [];
        const sql = `INSERT INTO people(name) VALUES ('Wesley')`;
        const select = `select name from people;`;
        await connection.query(sql);
        connection.query(select, (err, rows) => { 
          if(err) throw err; 
          rows.forEach(r => {
            users.push(`<br>${r.name}`)    
          });
          console.log(rows); 
          console.log(users); 
          res.status(200).send(`<h1>Full Cycle Rocks...!</h1> ${users}`)
          
      });
    } catch (error) {
      res.status(500).send(`Something broke! ${JSON.stringify(error.message)}`);
    }  
  })
    


app.listen(port, () =>{
    console.log('Running on ' + port);
})