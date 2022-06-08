const { Op } = require("sequelize");
var db = require("../utils/database");
const sequelize = require("../models/users");

const Users = db.users;

var addUser = async (req, res) => {
  let data = await Users.create({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
  });

  res.status(200).json(data);
};

var updateUser = async (req, res) => {
  let data = await Users.update(
    {
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
    },
    {
      where: { id: req.params.id },
    }
  );
  let datas = await Users.findOne({
    where: { id: req.params.id },
  });
  res.status(200).json(datas);
  res.status(200).json(data);
};

var deleteUser = async (req, res) => {
  let data = await Users.destroy({
    where: { id: req.params.id },
  });
  res.status(200).json(data);
};

var findUser = async (req, res) => {
  let data = await Users.findAll();
  res.status(200).json(data);
};

var findOneUser = async (req, res) => {
  let data = await Users.findOne({
    where: { id: req.params.id },
  });
  res.status(200).json(data);
};

var findBy = async (req, res) => {
  let pk = req.params.id;
  if (pk === null) {
    res.send("no data found");
  } else {
    let data = await Users.findByPk(pk);
    res.status(200).json(data);
  }
};
var softDelete = async (req, res) => {
  let data = await Users.destroy({
    where: { id: req.params.id },
  });
  res.json("Ok");
};

// var restoreSoftDel = async (req, res) => {
//   let data = await Users.restore({
//     //where: { id: req.params.id }
//     where: {
//       destroyedAt: {
//         [Op.ne]: null,
//       },
//     },
//   });
//   res.status(200).json(data);
// };

// var findAndCount = async (req, res) => {
//   //let data = await Users.findAll();
//   let { count, rows } = await Users.findAndCountAll({
//     // where: { gender: req.params.gender }
//     where: {
//       destroyedAt: {
//         [Op.eq]: null,
//       },
//     },
//   });
//   let response = {
//     count: count,
//     data: rows,
//   };
//   res.status(200).json(response);
// };

var andOp = async (req, res) => {
  let data = await Users.findAll({
    where: {
      [Op.and]: [{ name: req.params.name }, { id: req.params.id }],
    },
  });
  res.json(data);
};
var orOperator = async (req, res) => {
  let data = await Users.findAll({
    where: {
      [Op.or]: [{ name: "Preeti Sharma" }, { id: 3 }],
    },
  });
  res.json(data);
};

var lessThanEqual = async (req, res) => {
  let data = await Users.findAll({
    where: {
      id: {
        [Op.lte]: 2,
      },
    },
  });
  res.json(data);
};
module.exports = {
  addUser,
  updateUser,
  deleteUser,
  findUser,
  findOneUser,
  findBy,
  softDelete,
  andOp,
  orOperator,
  lessThanEqual,
};
