import {NEW_MOVIE_REJECTED,NEW_MOVIE_FULFILLED,NEW_MOVIE_PENDING,
    FETCH_MOVIE_PENDING,
	FETCH_MOVIE_FULFILLED,
    FETCH_MOVIE_REJECTED,
    UPDATE_MOVIE_PENDING,
	UPDATE_MOVIE_FULFILLED,
    UPDATE_MOVIE_REJECTED
} from '../actions/addNewMovie'

const initialState={
    fetching:false,
    fetched:false,
    error:{},
    movie:{},
    
}
export default (state=initialState,action)=>{
    switch(action.type){
        case NEW_MOVIE_FULFILLED:
        return {
            ...state,
            movie:action.payload,
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
        case FETCH_MOVIE_PENDING:
			return {
                ...state,
                movie:{}
			};
		case FETCH_MOVIE_FULFILLED:
			return {
                ...state,
                movie:{movie: action.payload.movie},                
				
			};
		case FETCH_MOVIE_REJECTED:
			return {
                ...state,   
                movie:{},      
            };
            case UPDATE_MOVIE_PENDING:
			return {
				...state,
				fetching: true
			};
		case UPDATE_MOVIE_FULFILLED:
			return {
				...state,
				fetching: false,
				done: true
			};
		case UPDATE_MOVIE_REJECTED:
			return {
				...state,
				error: action.payload,
				fetching: false
			};
	
        default:
            return state;
    }
}