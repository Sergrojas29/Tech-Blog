const { Comment } = require('../models')

const seedComment = () => Comment.bulkCreate([
    {
        content: "ORM is very new concept to me but Cool",
        author: 1,
        orginalPost: 2,
    },
    {
        content: "more cool guy",
        author: 2,
        orginalPost: 1,
    },
]);


module.exports = seedComment;