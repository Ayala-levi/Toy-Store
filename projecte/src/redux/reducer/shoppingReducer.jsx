import {produce} from 'immer'
export const myState={
   order:[]
   };


   export const dataShoppingReducer=produce((state,action)=>{
    switch(action.type){
   case "ORDER":{
    debugger
    return {
        ...state, // עותק חדש של ה-state הקיים
        order: action.payload, // מעדכנים את השדה list
      };
    break;
   }

    default:
    break;
    }

   },myState)