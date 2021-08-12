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
router.get('/', productsCtrl.index)
router.get('/:id', productsCtrl.show)
router.put('/:productid/updateProperty/:propertyid', checkAuth, productsCtrl.updateProperty)
router.patch('/createProperty/:id', checkAuth, productsCtrl.createProperty)
router.patch('/update/:productid', checkAuth, productsCtrl.update)
router.post('/:shopid/create', checkAuth, productsCtrl.create)
router.delete('/:productid/deleteProperty/:propertyid', checkAuth, productsCtrl.deleteProperty)