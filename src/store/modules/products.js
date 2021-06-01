import axios from 'axios' ;

const state = {
    productLoading: false
};

const getters = {
    productLoading(state){
        return state.productLoading
    }
};

const mutations = {

};

const actions = {
    addProduct({state}, fd){
        state.productLoading = true;
        axios
        .post(
          "seller/shop/addProduct",
          fd
        )
        .then((res) => {
            console.log(res)
            state.productLoading = false;
        })
        .catch((err) => {
            console.log(err.response)
            state.productLoading = false;
        });
    },
};

export default {
    state,
    getters,
    mutations,
    actions
}