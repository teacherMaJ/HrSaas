
import { getToken, setToken, removeToken } from '@/utils/auth'
import {getUserInfo} from "@/api/modules/user"

const getDefaultState = () => {
  return {
    token: getToken(),
    userInfo:{

    }
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USERINFO(state,userInfo){
    state.userInfo = userInfo
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      $API.user.login({ mobile: username.trim(), password: password }).then(response => {
        console.log(response);

        commit('SET_TOKEN', response)
        setToken(response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  //获取用户信息
 async getUserInfo({commit}){
   console.log(1);
   const res = await getUserInfo()
   console.log(2);
   commit("SET_USERINFO",res)
  }
 
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

