import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        shoplist: [],
        commlist: [],
    },
    getters: {

    },
    mutations: {
        btnshop(state, item) {
            state.shoplist.forEach(el => {
                if (el.id == item.id) {
                    state.commlist.push(item);
                    console.log(state.commlist);

                }
            })

        }

    }

})
export default store