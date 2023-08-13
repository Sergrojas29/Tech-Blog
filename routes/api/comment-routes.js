const router = require('express').Router();

const { Comment, Post, User } = require('../../models')


router.get('/', async (req, res) => {
    try {
        const data = await Comment.findAll({ include: [User, Post] })
        res.status(200).json(data)

    } catch (err) {
        console.log(err);
        res.status(400).json(err.message)
    }
})


router.get('/:id', async (req, res) => {
    try {
        const data = await Comment.findOne({
            where: {
                id: req.params.id
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
                        'title'
                    ]
                }]
        })
        res.status(200).json(data)

    } catch (err) {
        console.log(err);
        res.status(400).json(err.message)
    }
})

router.post('/', async (req, res) => {
    try {
        const newPost = await Comment.create(req.body)
        res.status(200).send(newPost)

    } catch (error) {
        console.log(error);

    }
})



router.delete('/', async (req, res) => {
    try {
        userId = req.session.userId

        if (userId === Number(req.body.userId)) {
            const data = await Comment.destroy(
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