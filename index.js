const express = require("express");
const Sequelize = require("sequelize");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var userCtrl = require("./Controllers/userController");
const port = 8083;

app.get("/", (req, res) => {
  res.send("home Page");
  console.log("tanvi");
});
app.post("/addUser", userCtrl.addUser); //insert user

app.put("/update/:id", userCtrl.updateUser); //update

app.delete("/delete/:id", userCtrl.deleteUser); //Permanent Delete user

app.get("/findUsers", userCtrl.findUser); //findAll
app.get("/findOneUser/:id", userCtrl.findOneUser); //findOne

app.get("/findBy/:id", userCtrl.findBy); //findByPk (primary key)
app.get("/softDelete/:id", userCtrl.softDelete); //soft delete

//app.get("/findAndCount", userCtrl.findAndCount); //findAndCountAll

//app.get("/restore/:id", userCtrl.restoreSoftDel); //restore after deletion

app.get("/andOp/:id/:name", userCtrl.andOp);

app.get("/orOperator", userCtrl.orOperator);

app.get("/lessThanEqual", userCtrl.lessThanEqual);

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
