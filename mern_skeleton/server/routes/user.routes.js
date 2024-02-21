import express from 'express'
 import userCtrl from '../controllers/user.controller.js' 
 const router = express.Router()
//  router.route('/api/users').post(userCtrl.create)
//  router.route('/api/users').get(userCtrl.list)
//  router.param('userId', userCtrl.userByID)
//  router.route('/api/users/:userId').get(userCtrl.read)
//  router.route('/api/users/:userId').put(userCtrl.update)
//  router.route('/api/users/:userId').delete(userCtrl.remove)

router.route('/api/products').get(userCtrl.list)
router.route('/api/products/:id').get(userCtrl.read)
router.route('/api/products').post(userCtrl.create)
router.route('/api/products/:id').put(userCtrl.update)
router.route('/api/products/:id').delete(userCtrl.remove)
router.route('/api/products').delete(userCtrl.deleteAll)
router.param('id', userCtrl.userByID)
 export default router
