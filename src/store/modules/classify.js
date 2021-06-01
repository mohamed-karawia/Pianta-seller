import axiosCalssify from '../../axiosClassify' ;

const state = {
    fruitType: '',
    classifyTypeLoading: false
};

const getters = {
    fruit(state){
        return state.fruitType;
    },
    classifyTypeLoading(state){
        return state.classifyTypeLoading
    }
};

const mutations = {
    fruitType(state, result){
        state.fruitType = result.prdiction
    }
};

const actions = {
    classifyAll({state, commit}, fd){
        state.classifyTypeLoading = true;
        axiosCalssify
        .post(
          "classify/all/image",
          fd
        )
        .then((res) => {
            console.log(res)
            commit('fruitType', res.data.result)
            state.classifyTypeLoading = false;
        })
        .catch((err) => {
            console.log(err.response)
            state.classifyTypeLoading = false;
        });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}