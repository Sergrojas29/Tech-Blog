const { Comment } = require('../models')

const seedComment = () => Comment.bulkCreate([
    {
        content: "ORM is very new concept to me but Cool",
        author: 1,
        orginalPost: 2,
    },
    {
        content: "AI is cool but scary",
        author: 2,
        orginalPost: 5,
    },
]);


module.exports = seedComment;