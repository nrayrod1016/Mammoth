import { Router } from 'express'
import * as productsCtrl from '../controllers/products.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

export {
  router
}

const router = Router();

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/:shopid/create', checkAuth, productsCtrl.create)