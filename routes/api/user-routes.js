const router = require('express').Router();

const { User } = require('../../models')


router.get('/', async (req, res) => {
    try {
        const data = await User.findAll()
        res.status(200).json(data)

    } catch (err) {
        console.log(err);
        res.status(400).json(err.message)
    }
})


router.get('/:id', async (req, res) => {
    try {
        const data = await User.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(data)

    } catch (err) {
        console.log(err);
        res.status(400).json(err.message)
    }
})

router.post('/', async (req, res) => {
    try {
        const data = await User.create(req.body)

        res.status(200).send(data)

    } catch (error) {
        console.log(error);

    }
})

router.put('/:id', async (req, res) => {
    try {
        const data = await User.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.delete('/:username', async (req, res) => {
    try {
        const data = await User.destroy(
            {
                where: {
                    username: req.params.username
                }
            })

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json(error)
    }


})



module.exports = router;