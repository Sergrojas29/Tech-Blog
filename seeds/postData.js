const {Post} = require('../models')

const seedPost = () => Post.bulkCreate([
    {
        title: "ORM - And you",
        content: "ORM is kinda hard my useful for API",
    },
    {
        title: "Myslq vs mysql 2",
        content: "One works with promises and the other doesn't which is which",
    },
    
]);


module.exports = seedPost;