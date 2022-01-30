//Step 1: Database connection
const mongoose = require("mongoose");
//mongodb://127.0.0.1:27017/dbname
//const conn_str = "mongodb://localhost:27017/tcet";
const conn_str = "mongodb+srv://mdanassk:root@cluster0.rbpmf.mongodb.net/student?retryWrites=true&w=majority";
//const conn_str = "mongodb://mdanassk:root@cluster0-shard-00-00.dslyw.mongodb.net:27017,cluster0-shard-00-01.dslyw.mongodb.net:27017,cluster0-shard-00-02.dslyw.mongodb.net:27017/student?ssl=true&replicaSet=atlas-3xk2hf-shard-0&authSource=admin&retryWrites=true&w=majority";

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