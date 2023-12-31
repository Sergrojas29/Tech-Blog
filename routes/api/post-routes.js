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
        author = req.session.userId
        data = {
            ...req.body,
            author
        }
        console.log(req.body);
        const newPost = await Post.create(data)
        res.status(200).send(newPost)

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

router.delete('/', async (req, res) => {
    try {
        userId = req.session.userId

        if (userId === Number(req.body.userId)) {
            const data = await Post.destroy(
                {
                    where: {
                        id: req.body.postId
                    }
                })
            res.status(200).json(data)
        } else {
            res.status(304).send("error")
        }

    } catch (error) {
        res.status(400).json(error)
    }
})



module.exports = router;