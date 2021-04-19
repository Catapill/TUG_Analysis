const express = require('express')
const app = express();
const cors = require('cors')
app.use(express.json())
const log = console.log;


//Database connection 
const dbUrl = 'postgres://postgres:postgres@axivity-instance.c0pjr3vvutww.us-east-2.rds.amazonaws.com:5432/axivitydbms';
console.log("\nPostgres origin URL for connection:\n", dbUrl);
const { Client } = require('pg');
app.use(cors())
function queryExecution(query){
    return new Promise(async resolve=>{

        const client = new Client({
            connectionString : dbUrl
          });
         client.connect(err => {
          
            if (err) {
              resolve({success: false , message: err});
                console.log(err);
                return;
            }
        client.query(query, async function(err, result){ 
          client.end();
            if(err){
                log('error: ', err);
                resolve({success: false, message: err});
            }
            resolve({success: true , message: 'successful', data: result});
            
       });
    })
})
}
app.get('/getData', async  (req,res) => {

  try {
    log('inside function')
    let offset = req.query.skip ?? 0;
    let limit = req.query.limit ?? 20;
  
    let data = await queryExecution("SELECT * from csv_data order by id  limit "+limit+" offset "+offset+";");
  
    // log(data)
    
  return res.send(data.data.rows);

  }
  catch(err) {
    console.log(err.message);
    return {success: false, message: err.message};
  }

})
app.get('/test', (req,res) => {
  res.send({'yolo' : 'polo'})
})

app.listen(3000, () => {
console.log('service is listening on 3000')
})
