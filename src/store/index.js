import Vue from 'vue'
import Vuex from 'vuex'
import userOptions from './user'
import bookOptions from './book'

Vue.use(Vuex)


export default new Vuex.Store({
    modules:{
        userAbout:userOptions,
        bookAbout:bookOptions
    }
})