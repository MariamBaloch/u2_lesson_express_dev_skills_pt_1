var express = require('express')
var router = express.Router()
const skillsCtrl = require('../controllers/skills')

/* GET todos/ */
router.get('/', skillsCtrl.index)
router.get('/add', skillsCtrl.add)

router.get('/:id', skillsCtrl.show)
router.post('/', skillsCtrl.create)
router.delete('/:id', skillsCtrl.deleteSkill)
router.get('/:id/edit', skillsCtrl.edit)
router.put('/:id', skillsCtrl.update)

module.exports = router
