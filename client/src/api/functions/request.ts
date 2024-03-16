import apiService from "../../utility/apiService";



export const getAllUsers =  () =>  apiService.get('/users').then((res) => res.data)
export const getUserById =  (id:number) =>  apiService.get(`/users/${id}`).then((res) => res.data)
