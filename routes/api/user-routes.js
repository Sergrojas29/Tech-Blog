const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User, Post } = require('../../models')


// /api/user/


router.post('/', async (req, res) => {
    try {
        if (req.body.first_name && req.body.last_name && req.body.password && req.body.email) {
            const dbUserData = await User.create(req.body);
            console.log(dbUserData)
            req.session.loggedIn = true;
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
        const user = dbUserData.get({plain:true})

        const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword || !dbUserData) {
            // If password is invalid, respond with an error
            res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
            return
        } else {

            // At this point, both email and password are valid
            req.session.loggedIn = true;
            req.session.username = user.username;
            req.session.id= user.id
            console.log(req.session);
            console.log(user);

            return res.status(200).redirect('/');
        }


    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});




module.exports = router;