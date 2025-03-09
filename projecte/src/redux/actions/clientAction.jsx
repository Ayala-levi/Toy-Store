export const set_current_client=(name,password)=>{
    return {type:"SET_CURRENT_CLIENT", 
         payload: { name, password }}
    
}
export const set_is_manager=()=>{
    return {type:"SET_IS_MANAGER", 
         payload:true}
    
}

export const set_listUser=(item)=>{
    debugger
    return {type:"SET_LISTUSER", 
         payload: item}
    
}
export const add_client=(item)=>{
    debugger
    return {type:"ADD_CLIENT", 
         payload: item}
    
}


