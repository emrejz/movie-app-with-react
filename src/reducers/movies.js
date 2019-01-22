import {FETCH_MOVIES_REJECTED,FETCH_MOVIES_FULFILLED,FETCH_MOVIES_PENDING,
    DELETE_MOVIE_PENDING,
	DELETE_MOVIE_FULFILLED,
    DELETE_MOVIE_REJECTED,} from '../actions/movies'

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
        case DELETE_MOVIE_FULFILLED:
        return {
            ...state,
            movies:state.movies.filter(item=>item._id!==action.payload.id)
           
            
        }
        case DELETE_MOVIE_PENDING:
        return {
            ...state,
            
           
        }
        case DELETE_MOVIE_REJECTED:
        return {
            ...state, 
            
           
        }
        default:
            return state;
    }
}