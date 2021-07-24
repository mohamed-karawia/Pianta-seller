import axiosCalssify from '../../axiosClassify' ;

const state = {
    fruitType: '',
    fruitFresh: '',
    classifyTypeLoading: false,
    classifyFreshLoading: false,  
};

const getters = {
    fruit(state){
        return state.fruitType;
    },
    classifyTypeLoading(state){
        return state.classifyTypeLoading
    },
    classifyFreshLoading(state){
        return state.classifyFreshLoading
    },
    fruitFresh(state){
        return state.fruitFresh
    }
};

const mutations = {
    fruitType(state, result){
        state.fruitType = result.prdiction
    },
    fruitFresh(state, result){
        const className = result[0].className;
        const classNameArray = className.split(' ');
        console.log(classNameArray);
        if(classNameArray[0] == 'Fresh'){
            state.fruitFresh = parseInt(result[0].probability)
        }else{
            state.fruitFresh = 100 - parseInt(result[0].probability)
        }
    },
    clearData(state) {
        state.fruitType = '';
        state.fruitFresh = '';
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
    },
    classifyFresh({state, commit}, fd){
        state.classifyFreshLoading = true;
        axiosCalssify
        .post(
          "/classify/image",
          fd
        )
        .then((res) => {
            console.log(res)
            commit('fruitFresh', res.data.result)
            state.classifyFreshLoading = false;
        })
        .catch((err) => {
            console.log(err.response)
            state.classifyFreshLoading = false;
        });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}