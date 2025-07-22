import router from '@adonisjs/core/services/router'
const EmniController = () => import('./emni.controller.js')

router
  .group(function EmniRoutesCb() {
    router.get('/', [EmniController, 'index'])
  })
  .prefix('/emni/v1')
