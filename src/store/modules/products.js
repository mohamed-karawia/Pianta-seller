import axios from 'axios' ;

const state = {
    productLoading: false,
    products: [],
    totalProducts: 0
};

const getters = {
    productLoading(state){
        return state.productLoading
    },

    products(state){
        return state.products
    }

};

const mutations = {
    pushProducts(state, result){
        state.products = result.products
        state.totalProducts = result.total
    },
    addProduct(state, product){
        state.products.push(product)
    }
};

const actions = {
    addProduct({state, commit}, fd){
        state.productLoading = true;
        axios
        .post(
          "seller/shop/addProduct",
          fd
        )
        .then((res) => {
            console.log(res)
            state.productLoading = false;
            commit('addProduct', res.data.product)
        })
        .catch((err) => {
            console.log(err.response)
            state.productLoading = false;
        });
    },

    getMyProducts({commit}){
        axios.get('seller/shop/products?page=1')
        .then(res => {
            console.log(res)
            commit('pushProducts', res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },
    /*deleteProduct({commit}, id){

    }*/
};

export default {
    state,
    getters,
    mutations,
    actions
}