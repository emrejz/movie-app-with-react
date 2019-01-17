import {FETCH_MOVIES,FETCH_MOVIES_ERROR} from '../actions/movies'

const initialState={
    fetching:false,
    fetched:false,
    error:{},
    movies:[]
}
export default (state=initialState,action)=>{
    switch(action.type){
        case FETCH_MOVIES:
        return {
            ...state,
            fetched:true,
            movies:action.payload
        }
        case FETCH_MOVIES_ERROR:
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