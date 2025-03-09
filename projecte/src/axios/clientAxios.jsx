import axios from "axios"
//כתובת של השרת 
const url="http://localhost:8050/client"
export const getAllClient=()=>{
debugger
    return axios.get(`${url}/getAll`)
}
export const addClient=(item)=>{
    
    debugger
        return axios.post(`${url}/add`,item)
    }

    export const isExist=(name,password)=>{
        debugger
            let data= axios.get(`${url}/isExist/${name}/${password}`)
            return data
        }
        export const idClient=(name,password)=>{
            debugger
                let x= axios.get(`${url}/idClient/${name}/${password}`)
                return x
            }
