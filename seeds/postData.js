const {Post} = require('../models')

const seedPost = () => Post.bulkCreate([
    {
        title: "ORM - And you",
        content: "ORM is kinda hard but useful for API",
        author: 1
    },
    {
        title: "Mysql vs mysql 2",
        content: "MySQL is a relational database management system that uses the SQL standard to manage data stored in its databases. On the other hand, MySQL2 is a Node.js driver for MySQL that provides an improved interface",
        author: 2
    },
    {
        title: "Express Session vs cookies",
        content: "A session and a cookie are two different ways to store information about a user activity on a website. A session is stored on the server side, while a cookie is stored on the client side.",
        author: 2
    },
    {
        title: "Why MVC is so Important",
        content: "MVC allows developer to maintain a true separation of concern, devising thier code between the model layer of data View layer for design and the Controller layer for application logic",
        author: 3
    },
    {
        title: "The Future of Artificial Intelligence",
        content: "AI is one of the most exciting and rapidly developing fields in technology today. From self-driving cars to virtual assistants, AI is changing the way we live and work.",
        author: 1
    },
]);


module.exports = seedPost;