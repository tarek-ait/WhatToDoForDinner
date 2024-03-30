import { createStore } from 'vuex'
import state from './state'
import * as mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'


const store = createStore({
    state,
    mutations,
    getters,
    actions,
})


export default store