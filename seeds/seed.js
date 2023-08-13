const sequelize = require('../config/connection');
const bcrypt = require('bcrypt')
const seedUser = require('./userData');
const seedPost = require('./postData');
const seedComment = require('./commentData')

async function seedall() {
    await sequelize.sync({force: true});

    await seedUser();
    await seedPost();
    await seedComment();

    process.exit(0);
}

seedall()

