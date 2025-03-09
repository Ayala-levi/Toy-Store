export const add_item=(item)=>{
    return {type:"ADD_ITEM", 
         payload: item}
    
}
export const add_amount=(code)=>{
    return {type:"ADD_AMOUNT", 
         payload: code}
    
}
export const less_amount=(code)=>{
    return {type:"LESS_AMOUNT", 
         payload: code}

}
export const dellItem=(code)=>{
    return {type:"DELL_ITEM", 
         payload: code}

}
export const empty=()=>{
    return {type:"EMPTY", 
    }

}