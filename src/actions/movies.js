import axios from 'axios'
import {API_BASE} from '../config/env'

export const FETCH_MOVIES="FETCH_MOVIES"
export const FETCH_MOVIES_ERROR="FETCH_MOVIES_ERROR"
export function fetchMovies(){
    return dispatch=>{
        axios.get(API_BASE+"/movies")
        .then(res=>res.data.movies)
        .then(res=>dispatch({
            type:FETCH_MOVIES,
            payload:res
        }))
        .catch(err=>dispatch({
            type:FETCH_MOVIES_ERROR,
            payload:err
        }))
        
    }
}