import { Router } from 'express'
import * as productsCtrl from '../controllers/products.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

export {
  router
}

const router = Router();

/*---------- Public Routes ----------*/
//router.get('/', checkAuth, productsCtrl)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)