const router = require('express').Router()

router.all('*', requireAthentication, loadUser)