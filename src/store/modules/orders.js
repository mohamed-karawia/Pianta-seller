import axios from 'axios'

const state = {
    orders: []
};

const getters = {
    orders(state){
        return state.orders
    }
};

const mutations = {
    pushOrders(state, soldItems){
        state.orders = soldItems
    }
};

const actions = {
    getOrders({commit}){
        axios.get('/seller/shop/getOrders')
        .then(res => {
            console.log(res)
            commit('pushOrders', res.data.sloldItems.sloldItems)
        })
        .catch(err => {
            console.log(err.response)
        })
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}