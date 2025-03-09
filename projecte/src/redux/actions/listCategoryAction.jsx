export const update_category=(item)=>{
    debugger
    return {type:"UPDATE_CATEGORY", 
         payload:  item }
    
}
export const set_listCategory=(item)=>{
    debugger
    return {type:"SET_LISTCATEGORY", 
         payload: item}
    
}
export const find_id_category=(name)=>{
    debugger
    return {type:"FIND_ID_CATEGORY", 
         payload: name}
    
}
export const dell_category=(id,status1)=>{
    debugger
    return {type:"DELL_CATEGORY", 
         payload:{id,status1}}
    
}
export const add_category=(item)=>{
    debugger
    return {type:"ADD_CATEGORY", 
         payload:item}
    
}