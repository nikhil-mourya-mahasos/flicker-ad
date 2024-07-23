import { createStore } from "vuex";
import { Login } from "@/api/account";
import {setToken} from "@/utils/cookies"
import Cookies from "js-cookie";

export default createStore({
    state(){
        return{
            userName:'',
            email:'',
            contactNumber:'',
            accessToken:''
        }
        
    },
    mutations:{
        setToken(state,token){
            state.accessToken = token;
        }
    },
    actions:{
        async handleLogin(data){
            const res = await Login(data);
            if(res.accessToken){
                Cookies.set('flicker',res.accessToken)
                setToken(res.accessToken)
                this.state.accessToken = res.accessToken;
            }
            return res;
        },
        async handleLogout(){
            // removeToken();
            // const res = await Login(data);
            // if(res.accessToken){
            //     setToken(res.accessToken)
            //     this.state.accessToken = res.accessToken;
            // }
        }

    }
})