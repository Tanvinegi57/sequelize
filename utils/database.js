const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("users", "root", "tanvi5767", {
  dialect: "mysql",
  host: "localhost",
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected!");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });
const db = {};
db.sequelize = sequelize;
//db.Sequelize = Sequelize

db.users = require("../models/users")(sequelize, DataTypes);
db.sequelize.sync().then(() => {
  console.log("Yes re-sync");
});

module.exports = db;
