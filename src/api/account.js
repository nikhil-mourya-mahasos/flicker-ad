import service from "@/utils/request"


export const Login = (data) =>
    service({
        url:'/admins/login',
        method:'post',
        data
    })