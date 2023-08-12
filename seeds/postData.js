const {Post} = require('../models')

const seedPost = () => Post.bulkCreate([
    {
        title: "ORM - And you",
        content: "ORM is kinda hard but useful for API",
        author: 1
    },
    {
        title: "Myslq vs mysql 2",
        content: "One works with promises and the other doesn't which is which",
        author: 2
    },
    {
        title: "Express Session vs cookies",
        content: "Sessions are taken care of by the server and cookies are client side",
        author: 2
    },
    
]);


module.exports = seedPost;