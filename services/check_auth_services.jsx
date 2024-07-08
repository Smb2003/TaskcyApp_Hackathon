import { apiHandle } from "../config/ApiHandle/apiHandle"

export const signup_service = (post_data) => {

   return apiHandle.post('/signUp', post_data)
}


export const login_service = (post_data) => {

   return apiHandle.post('/login', post_data)
}




export const check_auth_service = () => {

   return apiHandle.get('/check_auth')
}