import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        count: 0,
        userData: {},
        userToken: {}
    },
    mutations: {
        setUserData(state) {
            // console.log(value)
            state.userData = JSON.parse(window.localStorage.userData)
        },
        setUserToken(state,value) {
            state.userToken = value
        }
    },
    // actions: {
    //     userData(context, data) {
    //         console.log(data)
    //         context.commit('setUserData', data)


    //     }
    // }
})

export default store;