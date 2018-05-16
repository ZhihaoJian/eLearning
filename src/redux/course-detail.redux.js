import Axios from 'axios';

const SEARCH_QUESTION = 'SEARCH_QUESTION';
const REQUEST_FAIL = 'REQUEST_FAIL';

const initState = {}

export function courseDetailReducer(state = initState, action){
    switch(action.type){
        case SEARCH_QUESTION:
            return {...state}
        case REQUEST_FAIL:
            return {...state}
        default:
            return {...state}
    }
}

function success(type,data){
    return {type,payload:data}
}

function fail(type,data){
    return {type,payload:data}    
}

export function onSearch(keyword){
    return dispatch =>{
        Axios.get(`/search?${keyword}`)
            .then(res=>{
                if(res.status === 200){
                    dispatch(success(SEARCH_QUESTION,res.data.data));
                }else{
                    dispatch(fail(REQUEST_FAIL,res.data.data));                    
                }
            })
    }
}