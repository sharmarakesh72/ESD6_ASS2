//Step 1: Database connection
const mongoose = require("mongoose");
//mongodb://127.0.0.1:27017/dbname
//const conn_str = "mongodb://localhost:27017/tcet";
const conn_str ="mongodb+srv://root:Rakesh88@cluster0.hndo6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(conn_str)
.then(() => console.log("Connected successfully..."))
.catch( (error) => console.log(error) );
//Step 2: Create Schema (Java Class)
const userSchema = new mongoose.Schema({
studentId: String,
Name: String,
department: String
})
//Step 3: Create collection Object (model)
// MAPPING
const userObject = new mongoose.model("students", userSchema);
exports.User = userObject;