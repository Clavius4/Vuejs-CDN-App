const app = Vue.createApp({
    // Root component options
  })
  
  // Register global components
  app.component('app-header', AppHeader)
  app.component('app-footer', AppFooter)
  
  // Use Vue Router and Vuex
  app.use(router)
  app.use(store)
  
  // Mount the app
  app.mount('#app')