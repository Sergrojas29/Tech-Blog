const User = require('./user');
const Post = require('./post')
const Comment = require('./comment')


User.hasMany(Post, {
    foreignKey: "author",
})


Post.belongsTo(User, {
    foreignKey: 'author',
});

User.hasMany(Comment, {
    foreignKey: "author",
})


Comment.belongsTo(User, {
    foreignKey: 'author',
});


Post.hasMany(Comment, {
    foreignKey: "orginalPost",
})

Comment.belongsTo(Post, {
    foreignKey: 'orginalPost',
});






module.exports = {
    User,Post,Comment
}