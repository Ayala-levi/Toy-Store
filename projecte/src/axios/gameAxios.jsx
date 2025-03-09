import axios from "axios"
//כתובת של השרת 
const url="http://localhost:8050/game"
export const getAllGame=()=>{
debugger
    return axios.get(`${url}/getAll`)
}

export const updateGame = (item) => {

    debugger
 return axios.put(`${url}/update/${item._id}`, item);
   

}
export const dellGame = (id) => {
    debugger
    return axios.delete(`${url}/delete/${id}`);

}
export const addGame = (item) => {
    debugger
    return axios.post(`${url}/add`, item);

}
export const getByCategory = (id) => {
    debugger
    return axios.get(`${url}/getByCategory/${id}`);

}


