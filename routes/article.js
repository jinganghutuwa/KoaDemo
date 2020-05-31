/*
 * @Author: Jason
 * @Date: 2020-01-20 17:53:34
 * @version: 
 * @LastEditors: Jason
 * @LastEditTime: 2020-05-31 14:55:43
 * @Descripttion: 
 */
const router = require('koa-router')()
const ArtileController = require('./../controllers/article')



router.post('/create', ArtileController.create)
router.get('/detail/:id?', ArtileController.detail)
router.get('/update/:id?', ArtileController.update)
router.get('/delete/:id?', ArtileController.delete)


module.exports = router
