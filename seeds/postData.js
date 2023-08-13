const {Post} = require('../models')

const seedPost = () => Post.bulkCreate([
    {
        title: "ORM - And you",
        content: "ORM is kinda hard but useful for API",
        author: 1
    },
    {
        title: "Mysql vs mysql 2",
        content: "One works with promises and the other doesn't which is which",
        author: 2
    },
    {
        title: "Express Session vs cookies",
        content: "Sessions are taken care of by the server and cookies are client side",
        author: 2
    },
    {
        title: "Why MVC is so Important",
        content: "MVC allows developer to maintain a true separation of concern, devising thier code between the model layer of data View layer for design and the Controller layer for application logic",
        author: 1
    },
    {
        title: "Why MVC is so Important",
        content: "MVC allows developer to maintain a true separation of concern, devising thier code between the model layer of data View layer for design and the Controller layer for application logic",
        author: 1
    },
]);


module.exports = seedPost;