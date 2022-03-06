import Vue from 'vue'
import App from './App.vue'

import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const apolloClient = new ApolloClient({
  uri: "http://localhost:3000/graphql"
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  apolloProvider,
}).$mount('#app')
