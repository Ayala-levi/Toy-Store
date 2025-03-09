export const update_game=(item)=>{
    return {type:"UPDATE_GAME", 
         payload:item}
    
}



export const dell_game=(id,status1)=>{
    debugger
    return {type:"DELL_GAME", 
         payload:{id,status1}}
    
}
export const add_game=(item)=>{
    debugger
    return {type:"ADD_GAME", 
         payload:item}
    
}

export const set_listGame=(item)=>{
    return {type:"SET_LISTGAME", 
         payload:item}
    
}