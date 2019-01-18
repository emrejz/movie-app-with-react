import {FETCH_MOVIES_REJECTED,FETCH_MOVIES_FULFILLED,FETCH_MOVIES_PENDING} from '../actions/movies'

const initialState={
    fetching:false,
    fetched:false,
    error:{},
    movies:["a"]
}
export default (state=initialState,action)=>{
    switch(action.type){
        case FETCH_MOVIES_FULFILLED:
        return {
            ...state,
            movies:action.payload,
            fetched:true,
            fetching:false,
            
        }
        case FETCH_MOVIES_PENDING:
        return {
            ...state,
            fetched:false,
            fetching:true,
           
        }
        case FETCH_MOVIES_REJECTED:
        return {
            ...state, 
            error:action.payload,
            fetching:false,
            fetched:false,
           
        }
        default:
            return state;
    }
}