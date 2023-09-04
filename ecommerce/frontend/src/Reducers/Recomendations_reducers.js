import { 
    RECOMENDATIONS_GET_FAIL, 
    RECOMENDATIONS_GET_REQUEST,
    RECOMENDATIONS_GET_SUCCESS} from "../Constants/Product_constant";

export const RecomendationsReducer = (state = {recomandations:[]},action) => {
    switch (action.type) {
        case RECOMENDATIONS_GET_REQUEST:
            return {loading:true, recomandations:[]}

        case RECOMENDATIONS_GET_SUCCESS:
            return {loading:false, recomandations:action.payload}

        case RECOMENDATIONS_GET_FAIL:
            return {loading:false, error: action.payload}
        default:
            return state
    }
}