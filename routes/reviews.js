import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

export {
  router
}

const router = Router();

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/:type/:id/create', checkAuth, reviewsCtrl.create)
router.delete('/:type/:id/:reviewid', checkAuth, reviewsCtrl.deleteReview)