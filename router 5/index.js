//توجية الطلب الى صفحتة 
const router = require('express').Router(),
UserRouters = require('/user'),
CoursesRouters = require('/course')

// router any request foe users to user folder 
router.use('/users', UserRouters)
router.use('courses', CoursesRouters)

module.exports = router
