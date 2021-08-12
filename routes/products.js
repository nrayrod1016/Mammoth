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
router.use('/', productsCtrl.index)
router.patch('/:productid/update', productsCtrl.update)
router.post('/:shopid/create', checkAuth, productsCtrl.create)