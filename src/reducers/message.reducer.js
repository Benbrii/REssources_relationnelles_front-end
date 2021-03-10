import * as ConnectConst from "../const/message.const";

const initState = {
    message: ""
};

const messageReducer = (state = initState, action) => {

  const { type, payload } = action;

  switch (type) {
    case ConnectConst.SET_MESSAGE:
      return { message: payload };

    case ConnectConst.CLEAR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
}

export default messageReducer