import * as statConst from "../const/stat.const";

const initState = {
    dataConst: [],
    dataCrea: []
};

const statReducer = (state = initState, action) => {
    switch (action.type) {

        // GET RESSOURCES

        case statConst.GET_STAT_FULFILLED:

            const consArray = action.payload.data.consultStats
            const dataConsultation = []

            for (let i = 0; i < 12; i++) {
                for (let j = 0; j < consArray.length; j++) {

                    if ((i + 1) === consArray[j].mois) {
                        dataConsultation[i] = parseInt(consArray[j].count, 10);
                    } else {
                        dataConsultation[i] = 0
                    }
                }
            }

            const creArray = action.payload.data.creaStat
            const dataCreation = []

            for (let i = 0; i < 12; i++) {
                for (let j = 0; j < creArray.length; j++) {

                    if ((i + 1) === creArray[j].mois) {
                        dataCreation[i] = parseInt(creArray[j].count, 10);
                    } else {
                        dataCreation[i] = 0
                    }
                }
            }

            return {
                ...state,
                dataConst: dataConsultation,
                dataCrea: dataCreation
            };

        default:
            return state;

    }
}

export default statReducer;