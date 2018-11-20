const Sequelize = require('sequelize');
const sequelize = new Sequelize('freshmob', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports.getSequelize = function () {
    return sequelize;
};

const UserData = sequelize.define('UserData', {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    phone: Sequelize.INTEGER,
    email: Sequelize.STRING
});

const ToneData = sequelize.define('ToneData', {
    name: Sequelize.STRING,
    tag: Sequelize.STRING,
    describe: Sequelize.STRING,
    uploadby: Sequelize.INTEGER,
    link: Sequelize.STRING
});


module.exports.UserData = UserData;
module.exports.ToneData = ToneData;
sequelize.sync();