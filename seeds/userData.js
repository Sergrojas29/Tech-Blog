const {User} = require('../models')

const seedUser = () => User.bulkCreate([
    {
        username: "Test",
        email: "test@gmail.com",
        password: "passwordTest1"
    },
    {
        username: "New",
        email: "New@gmail.com",
        password: "passwordNew1"
    },
    
]);


module.exports = seedUser;