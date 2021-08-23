import { Router } from 'express'
import * as searchCtrl from '../controllers/search.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

export {
  router
}

const router = Router();

/*---------- Public Routes ----------*/
router.get('/:query', searchCtrl.search)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)