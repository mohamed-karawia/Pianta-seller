import axios from 'axios'

const state = {
    orders: [],
    loading : false,
    wallet: 0,
    pendingWallet: 0
};

const getters = {
    orders(state){
        return state.orders
    },
    ordersLoading(state){
        return state.loading
    },
    wallet(state){
        return state.wallet;
    },
    pendingWallet(state){
        return state.pendingWallet
    }
};

const mutations = {
    pushOrders(state, soldItems){
        console.log(soldItems)
        state.orders = soldItems.sloldItems;
        state.wallet = soldItems.wallet;
        state.pendingWallet = soldItems.bindingWallet
    },

};

const actions = {
    getOrders({commit, state}){
        state.loading = true;
        let url = 'seller/shop/getOrders'
        axios.get(url)
        .then(res => {
            state.loading = false;
            console.log(res)
            commit('pushOrders', res.data.sloldItems)
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