import * as testConst from "../const/test.const";

const initState = {
    test: [],
    isLoading: false
};

const test = (state = initState, action) => {
    switch (action.type) {

        case testConst.TEST_FULFILLED:
            return {
                ...state,
                test: action.payload.data,
                isLoading: false
            }
        case testConst.TEST_PENDING:
            return {
                ...state,
                isLoading: true
            }
        case testConst.TEST_REJECTED:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;

    }
}

export default test;