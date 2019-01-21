import axios from 'axios'
import {API_BASE} from '../config/env'

export const NEW_MOVIE_REJECTED="NEW_MOVIE_REJECTED"
export const NEW_MOVIE_FULFILLED="NEW_MOVIE_FULFILLED"
export const NEW_MOVIE_PENDING="NEW_MOVIE_PENDING"

export const FETCH_MOVIE_REJECTED="FETCH_MOVIE_REJECTED"
export const FETCH_MOVIE_FULFILLED="FETCH_MOVIE_FULFILLED"
export const FETCH_MOVIE_PENDING="FETCH_MOVIE_PENDING"

export function addNewMovie({title,cover}){
    return dispatch=>{  
        dispatch({
            type:"NEW_MOVIE",
            payload:axios.post(API_BASE+"/movies",{title,cover})
        })
        
      
    }
}
export function fetchMovie(id){
	return dispatch => {
		dispatch({
			type: "FETCH_MOVIE",
			payload: axios.get(`${API_BASE}/movies/${id}`)
				.then(result => result.data)
		})
	}
}