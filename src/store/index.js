import { createStore } from "vuex";
import { Login } from "@/api/account";
import { setToken,getToken,removeToken } from "@/utils/cookies"
// import Cookies from "js-cookie";

export default createStore({
  state() {
    return {
      userName: '',
      email: '',
      contactNumber: '',
      accessToken: getToken() || '',
      isLoggedIn: false
    }
  },
  mutations: {
    setAccessToken(state, token) {
      state.accessToken = token;
    },
    setLogin(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    }
  },
  actions: {
    async handleLogin({ commit }, payload) {
      try {
        const res = await Login(payload)
        if (res) {
          console.log(res, 'res from store');
          //use .then if commit is not updating state
          commit('setAccessToken', res.accessToken);
          commit('setLogin', true);
          // context.isLoggedIn = true;
          // context.accessToken = res.accessToken;

          // Cookies.set('flicker', res.accessToken);
          setToken(res.accessToken)
          return res;
        }
      } catch (err) {
        console.log(err, 'err from store')
      }
    },
    async handleLogout({ commit }) {
      removeToken();
      commit('isLoggedIn',false)
      commit('setAccessToken',"")
      // const res = await Login(data);
      // if(res.accessToken){
      //     setToken(res.accessToken)
      //     this.state.accessToken = res.accessToken;
      // }
    },
    async GetUserInfo({commit}) {
      // if (commit === '') {
      //   throw Error('GetUserInfo: token is undefined!')
      // }

      //me call will be there to check if token is stored but state not found

      // const { data } = await getUserInfo()
      // if (!data) {
      //   throw Error('Verification failed, please Login again.')
      // }
      // commit('setAccessToken', data.accessToken);
      commit('setLogin', true);
    }

  }
})