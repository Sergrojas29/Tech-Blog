const router = require('express').Router();
const { User, Post, Comment } = require('../models');



router.get('/', async (req, res) => {
	try {
		const loggedIn = req.session.loggedIn
		const allPosts = await Post.findAll({ include: [User] })
		const posts = allPosts.map((e) => e.get({ plain: true }))
		res.render('homepage', { posts, loggedIn });

	} catch (error) {
		res.status(404).send('<h1>Error</h1>')
	}
});

router.get('/post', async (req, res) => {
	const loggedIn = req.session.loggedIn
	const userId = req.session.userId

	loggedIn ?
		res.render('createPost', { userId, loggedIn }) :
		res.render('login', { loggedIn })
});

router.get('/post/:id', async (req, res) => {
	const checkForPost = await Comment.findAll({ where: { orginalPost: req.params.id } })
	if (checkForPost.length > 0) {
		const loggedIn = req.session.loggedIn
		const hasComment = true
		const allComments = await Comment.findAll({
			where: {
				orginalPost: req.params.id
			},
			include: [
				{
					model: User,
					attributes: [
						'id',
						'username'
					]
				},
				{
					model: Post,
					attributes: [
						'id',
						'title',
						'content'
					]
				}]
		})

		const commets = allComments.map((e) => e.get({ plain: true }))
		post = commets[0]
		res.render('postComment', { loggedIn, hasComment, commets, post })
	} else {
		const postData = await Post.findByPk(req.params.id)
		const loggedIn = req.session.loggedIn
		const posts = postData.get({ plain: true })
		const hasComment = false
		res.render('postComment', { loggedIn, hasComment, posts })
	}
});



router.get('/login', async (req, res) => {
	const loggedIn = req.session.loggedIn
	res.render('login', { loggedIn });
});

router.get('/logout', async (req, res) => {
	try {
		req.session.destroy();

		res.render('homepage')
	} catch (error) {
		console.log(error);
	}
}
)


module.exports = router;
