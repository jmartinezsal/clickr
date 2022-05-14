const router = require('express').Router();

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const imageRouter = require('./images.js');
const commentsRouter = require('./comments.js');
const profilesRouter = require('./profiles.js');


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/images', imageRouter);
router.use('/comments', commentsRouter);
router.use('/profiles', profilesRouter);


module.exports = router;
