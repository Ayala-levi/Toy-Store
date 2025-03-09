import { produce } from 'immer'

export const myState = {
  list: [
    // { code:1234,
    // name:"fff",
    // },
    // { code:33333,
    //   name:"dd",
    //     },
  ],

}
export const dataCategoryReducer = produce((state, action) => {
  switch (action.type) {
    case "UPDATE_CATEGORY": {
      debugger
      // const index=state.list.findIndex(u=>u._id==action.payload._id)
      // state.list[index]==action.payload
      const index = state.list.findIndex((u) => u._id === action.payload._id);

      if (index !== -1) {
        return {
          ...state,
          list: state.list.map((item, i) =>
            i === index ? action.payload : item
          ),
        };
      }
      return state;
    }
    case "SET_LISTCATEGORY": {
      debugger
      return {
        ...state, // עותק חדש של ה-state הקיים
        list: action.payload, // מעדכנים את השדה list
      };
    }
    case "FIND_ID_CATEGORY": {
      debugger
      const index=state.list.findIndex((x)=>x.name===action.payload)
      if(index!=-1)
        return state.list[index]._id
      else
      return -1;
      
    }
    case "DELL_CATEGORY": {
      debugger
      if (action.payload.status1) {
        return {
          ...state,
          list: state.list.filter((item) =>
            item._id != action.payload.id
          ),
        };
      }
      return state;
    }
    case "ADD_CATEGORY": {
      debugger
        state.list.push(action.payload)
       
    }
    break;
    default:
      break;
  }

}, myState)