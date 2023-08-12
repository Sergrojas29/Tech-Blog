const router = require('express').Router();
const { User, Post } = require('../models');



router.get('/', async (req, res) => {
	try {
		const loggedIn = req.session.loggedIn
		const allPosts = await Post.findAll({include:[User]})
		const posts = allPosts.map((e) => e.get({ plain: true }))
		res.render('homepage', {posts, loggedIn} );
		
	} catch (error) {
		res.status(404).send('<h1>Error</h1>')
	}
});

router.get('/post', async (req, res) => {
	const loggedIn = req.session.loggedIn
	const username = req.session.username

	loggedIn ? 
	res.render('createPost', {username,loggedIn} ):
	res.render('login',{loggedIn})
});



router.get('/login', async (req, res) => {
	const loggedIn = req.session.loggedIn
	res.render('login', {loggedIn});
});

router.get('/logout', async (req, res) => {
	req.session.loggedIn = false
	const loggedIn = req.session.loggedIn
	res.render('homepage', {loggedIn})
}
)


module.exports = router;
