const User = require('./user');
const Post = require('./post')


Post.belongsTo(User, {
    foreignKey: 'author'
});


module.exports = {
    User,Post
}