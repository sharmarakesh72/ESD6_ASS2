//const api_url = "<heroku_app_url>"
const api_url = "https://anasproject.herokuapp.com/user"
function loadData(records = []) {
var table_data = "";
for(let i=0; i<records.length; i++) {
table_data += `<tr>`;
table_data += `<td>${records[i].studentId}</td>`;
table_data += `<td>${records[i].Name}</td>`;
table_data += `<td>${records[i].department}</td>`;
table_data += `<td>`;
table_data += `<a href="edit.html?id=${records[i]._id}"><button class="btn btn-primary">Edit</button></a>`;
table_data += '&nbsp;&nbsp;';
table_data += `<button class="btn btn-danger" onclick=deleteData('${records[i]._id}')>Delete</button>`;
table_data += `</td>`;
table_data += `</tr>`;
}
//console.log(table_data);
document.getElementById("tbody").innerHTML = table_data;
}
function getData() {
fetch(api_url)
.then((response) => response.json())
.then((data) => {
console.table(data);
loadData(data);
});
}
function getDataById(id) {
fetch(`${api_url}/${id}`)
.then((response) => response.json())
.then((data) => {
console.log(data);
document.getElementById("id").value = data._id;
document.getElementById("studentId").value = data.studentId;
document.getElementById("Name").value = data.Name;
document.getElementById("department").value = data.department;
})
}
function postData() {
var studentId = document.getElementById("studentId").value;
var Name = document.getElementById("Name").value;
var department = document.getElementById("department").value;
data = {studentId: studentId, Name: Name, department: department};
fetch(api_url, {
method: "POST",
headers: {
'Accept': 'application/json',
'Content-Type': 'application/json'
},
body: JSON.stringify(data)
})
.then((response) => response.json())
.then((data) => {
console.log(data);
window.location.href = "index.html";
})
}
function putData() {
var _id = document.getElementById("id").value;
var studentId = document.getElementById("studentId").value;
var Name = document.getElementById("Name").value;
var department = document.getElementById("department").value;
data = {_id: _id, studentId: studentId, Name: Name, department: department};
fetch(api_url, {
method: "PUT",
headers: {
'Accept': 'application/json',
'Content-Type': 'application/json'
},
body: JSON.stringify(data)
})
.then((response) => response.json())
.then((data) => {
console.table(data);
window.location.href = "index.html";
})
}
function deleteData(id) {
user_input = confirm("Are you sure you want to delete this record?");
if(user_input) {
fetch(api_url, {
method: "DELETE",
headers: {
'Accept': 'application/json',
'Content-Type': 'application/json'
},
body: JSON.stringify({"_id": id})
})
.then((response) => response.json())
.then((data) => {
console.log(data);
window.location.reload();
})
}
}