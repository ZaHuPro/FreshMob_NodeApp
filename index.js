let express = require('express');
let app = express();

let UserData = require("./db").UserData;
let PostData = require('./db').PostData;

let getSequelize = require("./db").getSequelize;
let sequelize = getSequelize();

let md5 = require('md5');
let bodyParser = require('body-parser');

app.use("/", express.static(__dirname + "/public"));
app.use('/jquery', express.static(__dirname + "./node_modules/jquery"));
app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/userlogin', function (req, res) {
    sequelize.sync()
        .then(function () {
            return UserData.findOne({
                where: {
                    username: req.body.username,
                    password: req.body.password
                }
            })
        })
        .then(function (data) {
            res.json(data)
        })
});

app.post('/userregister', function (req, res) {
    sequelize.sync()
        .then(function () {
            return UserData.create({
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                phone: req.body.phone
            })
        })
        .then(function (data) {
            res.json(data)
        })
});

app.listen(2468, function () {
    console.log("Server Stated")
});