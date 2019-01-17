import {FETCH_MOVIES_REJECTED,FETCH_MOVIES_FULFILLED} from '../actions/movies'

const initialState={
    fetching:false,
    fetched:false,
    error:{},
    movies:[]
}
export default (state=initialState,action)=>{
    switch(action.type){
        case FETCH_MOVIES_FULFILLED:
        return {
            ...state,
            fetched:true,
            movies:action.payload
        }
        case FETCH_MOVIES_REJECTED:
        return {
            ...state,
            fetching:false,
            fetched:false,
            error:action.payload
        }
        default:
            return state;
    }
}