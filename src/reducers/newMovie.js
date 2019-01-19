import {NEW_MOVIE_REJECTED,NEW_MOVIE_FULFILLED,NEW_MOVIE_PENDING} from '../actions/addNewMovie'

const initialState={
    fetching:false,
    fetched:false,
    error:{},
    movies:["a"]
}
export default (state=initialState,action)=>{
    switch(action.type){
        case NEW_MOVIE_FULFILLED:
        return {
            ...state,
            movies:action.payload,
            fetched:true,
            fetching:false,
            
        }
        case NEW_MOVIE_PENDING:
        return {
            ...state,
            fetched:false,
            fetching:true,
           
        }
        case NEW_MOVIE_REJECTED:
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