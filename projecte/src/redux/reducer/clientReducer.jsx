import { produce } from 'immer'

export const myState = {
    userList: [
        // {
        //     password: "1234",
        //     name: "fff",
        // },
        // {
        //     password: "33333",
        //     name: "dd",
        // },
        // {
        //     password: "0000",
        //     name: "m",
        // }
    ],
    currentClient: {
        name: "", password: ""
    },
    isManager: false

}
export const dataClientReducer = produce((state, action) => {
    switch (action.type) {
        case "SET_CURRENT_CLIENT":{
            debugger; 
            state.currentClient.name = action.payload.name
            state.currentClient.password = action.payload.password
            break;}
            case "SET_IS_MANAGER":{
                debugger; 
                state.isManager = action.payload
                break;}
                case "SET_LISTUSER": {
                    return {
                      ...state, // עותק חדש של ה-state הקיים
                      userList: action.payload, // מעדכנים את השדה list
                    };
                  }
                  case "ADD_CLIENT": {
                    debugger
                      state.userList.push(action.payload)
                     
                  }
    

        default:
            break;
    }

}, myState)