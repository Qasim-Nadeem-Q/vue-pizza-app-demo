import { createStore } from "vuex";

const state = () => {
    return {
        active_nav_item: 1,
    }
}

const getters = {

};

const mutations = {
    updateNavItem(state, nav_item) {
        state.active_nav_item = nav_item;
    }

};

const actions = {

};

const store = createStore({
    state,
    getters,
    mutations,
    actions,
});

export default store;