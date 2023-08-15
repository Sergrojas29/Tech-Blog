const router = require('express').Router();

const apiRoutes = require('./api');


router.use('/api', apiRoutes)


// router.use((req, res) => {
//     res.send("<a href='/'>Wrong Route! Return Home</a>")
//   });

module.exports = router;