import * as testConst from "../const/test.const";
import * as testAPI from "../api/test.api";

export const getTest = () => ({
    type: testConst.TEST,
    payload: testAPI.fetchTest()
});