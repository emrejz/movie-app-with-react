import axios from 'axios'
import {API_BASE} from '../config/env'

export const FETCH_MOVIES_REJECTED="FETCH_MOVIES_REJECTED"
export const FETCH_MOVIES_FULFILLED="FETCH_MOVIES_FULFILLED"
export function fetchMovies(){
    return dispatch=>{
        dispatch({
            type:"FETCH_MOVIES",
            payload:axios.get(API_BASE+"/movies").then(res=>res.data.movies)
        })
        
      
    }
}