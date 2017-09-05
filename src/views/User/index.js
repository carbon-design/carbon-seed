import asyncLoadConfig from '~/config/asyncLoad'

export default {
  template: '<async-module></async-module>',
  components: {
    AsyncModule: () => ({
      component: import('./User' /* webpackChunkName: 'user' */),
      ...asyncLoadConfig
    })
  }
}