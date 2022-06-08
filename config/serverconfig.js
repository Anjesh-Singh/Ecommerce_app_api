require('dotenv').config(); //for importing data from .env file

let port = process.env.PORT; //declaring variable and fetching data

module.exports = {  //exporting data for main file
  PORT:port
}