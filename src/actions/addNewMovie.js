import axios from 'axios'
import {API_BASE} from '../config/env'

export const NEW_MOVIE_REJECTED="NEW_MOVIE_REJECTED"
export const NEW_MOVIE_FULFILLED="NEW_MOVIE_FULFILLED"
export const NEW_MOVIE_PENDING="NEW_MOVIE_PENDING"
export function addNewMovie({title,cover}){
    return dispatch=>{  
        dispatch({
            type:"NEW_MOVIE",
            payload:axios.post(API_BASE+"/movies",{title,cover})
        })
        
      
    }
}