const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User, Post } = require('../../models')


// /api/user/


router.post('/', async (req, res) => {
    try {
        if (req.body.username && req.body.password && req.body.email) {
            const dbUserData = await User.create(req.body);
            const newUser = dbUserData.get({plain:true})
            req.session.loggedIn = true;
            req.session.username = newUser.username;
            req.session.userId= newUser.id
            res.status(200).redirect('/')
        } else {

        }

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



// Login
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });
        
        const validPassword = await dbUserData.checkPassword(req.body.password);
        
        if (!validPassword || !dbUserData) {
            // If password is invalid, respond with an error
            res.status(400).send('<h1> Incorrect email or password. Please try again! </h1>');
            return
        } else {
            
            const user = dbUserData.get({plain:true})
            // At this point, both email and password are valid
            req.session.loggedIn = true;
            req.session.username = user.username;
            req.session.userId= user.id
            return res.status(200).redirect('/');
        }


    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});




module.exports = router;