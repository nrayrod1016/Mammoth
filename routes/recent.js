import { Router } from 'express'
import * as recentCtrl from '../controllers/recent.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

export {
  router
}

const router = Router();

/*---------- Public Routes ----------*/
//router.get('/', checkAuth, recentCtrl)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)