const {Router} = require('express')
const router = Router()

const {
    getProyecto,
    postProyecto,
    putProyecto,
    deleteProyecto
} = require('../controllers/proyecto')

router.get('/',getProyecto)
router.post('/',postProyecto)
router.put('/',putProyecto)
router.delete('/',deleteProyecto)

module.exports = router