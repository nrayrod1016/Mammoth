import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

export {
  router
}

const router = Router();

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/orders/new', checkAuth, profilesCtrl.newOrder)
router.patch("/:productid/addToWishlist", checkAuth, profilesCtrl.addToWishlist)
router.patch('/:productid/addToCart', checkAuth, profilesCtrl.addToCart)
router.delete('/:productid/removeFromCart', checkAuth, profilesCtrl.removeFromCart)
router.delete('/:productid/removeFromWishlist', checkAuth, profilesCtrl.removeFromWishlist)
router.delete('/remove/:orderid', checkAuth, profilesCtrl.removeOrder)
router.get('/userProfile', profilesCtrl.userProfile)
router.patch('/update', checkAuth, profilesCtrl.update)
router.get('/:id', profilesCtrl.show)