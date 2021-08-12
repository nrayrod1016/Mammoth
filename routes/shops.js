import { Router } from 'express'
import * as shopsCtrl from '../controllers/shops.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

export {
  router
}

const router = Router();

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', shopsCtrl.index)
router.post('/create', checkAuth, shopsCtrl.create)