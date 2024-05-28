const User = require('./User');
const Blog = require('./Blog')
const Comment = require('./Comment')

//User and blog relationship
User.hasMany(Blog, {
    foreignKey: "user_id"
});

Blog.belongsTo(User, {
    foreignKey: "user_id"
});

//User and comment relationship
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

//Blog and comment relationship
Blog.hasMany(Comment, {
    foreignKey: 'blog_id'
});

Comment.belongsTo(Blog, {
    foreignKey: "blog_id"
});




module.exports = { User, Blog, Comment };
