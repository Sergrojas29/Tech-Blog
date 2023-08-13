const {User} = require('../models')

const seedUser = () => User.bulkCreate([
    {
        username: "coolGuy123",
        email: "coolGuy123@gmail.com",
        password: "passwordTest1"
    },
    {
        username: "techGuy20",
        email: "techGuy20@gmail.com",
        password: "passwordNew1"
    },
    {
        username: "AdminDude5",
        email: "AdminDude5@gmail.com",
        password: "passwordNew155"
    },
    
]);


module.exports = seedUser;