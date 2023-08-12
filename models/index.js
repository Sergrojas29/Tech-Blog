const User = require('./user');
const Post = require('./post')


User.hasMany(Post, {
    foreignKey: "author",
})


Post.belongsTo(User, {
    foreignKey: 'author',
});




module.exports = {
    User,Post
}