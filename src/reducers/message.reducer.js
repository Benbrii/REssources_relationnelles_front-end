import * as MessageConst from "../const/message.const";

const initState = {
    ErrorMessage: "",
    greatMessage:"",
};

const messageReducer = (state = initState, action) => {

  const { type, payload } = action;

  switch (type) {
    case MessageConst.SET_ERROR_MESSAGE:
     
      return { 
        ErrorMessage: payload 
      };

    case MessageConst.SET_GREAT_MESSAGE:
      return { 
        greatMessage: payload 
      };

    case MessageConst.CLEAR_MESSAGE:
     
      return { 
        ErrorMessage: "",
        greatMessage: ""
      };

    default:
      return state;
    
  
  }
}

export default messageReducer