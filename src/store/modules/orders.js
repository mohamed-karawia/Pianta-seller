import axios from 'axios'

const state = {
    orders: [],
    loading : false
};

const getters = {
    orders(state){
        return state.orders
    },
    ordersLoading(state){
        return state.loading
    }
};

const mutations = {
    pushOrders(state, soldItems){
        state.orders = soldItems
    }
};

const actions = {
    getOrders({commit, state}, queries){
        state.loading = true;
        let url = 'seller/shop/getOrders'
        if(queries && queries.type !== 'all'){
            url = `/seller/shop/getOrders?type=${queries.type}`
        }
        axios.get(url)
        .then(res => {
            state.loading = false;
            console.log(res)
            commit('pushOrders', res.data.sloldItems.sloldItems)
        })
        .catch(err => {
            state.loading = false;
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