import Cookies from "js-cookie";

const key = 'flicker-token';
export const setToken =(token) => Cookies.set(key,token);
export const getToken = () => Cookies.get(key)
export const removeToken = () => Cookies.remove(key)