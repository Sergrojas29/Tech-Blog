const router = require('express').Router();

const { Post, User } = require('../../models')


router.get('/', async (req, res) => {
    try {
        const data = await Post.findAll(
            {
                include: [
                    User
                ]
            }
        )
        res.status(200).json(data)

    } catch (err) {
        console.log(err);
        res.status(400).json(err.message)
    }
})


router.get('/:id', async (req, res) => {
    try {
        const data = await Post.findOne({
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
        const data = await Post.create(req.body)

        res.status(200).send(data)

    } catch (error) {
        console.log(error);

    }
})

router.put('/:id', async (req, res) => {
    try {
        const data = await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.delete('/:Postname', async (req, res) => {
    try {
        const data = await Post.destroy(
            {
                where: {
                    Postname: req.params.Postname
                }
            })

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json(error)
    }


})



module.exports = router;