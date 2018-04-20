import Axios from "axios";

const CLICK_RIGHT_INDICATOR = 'CLICK_RIGHT_INDICATOR';
const CLICK_LEFT_INDICATOR = 'CLICK_LEFT_INDICATOR';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAIL = 'REGISTER_FAIL';

const initState = {
    direction: '',
    leftIndicatorVisible: false,
    rightIndicatorVisible: true
}

//交互reducer
export function interactReducer(state = initState, action) {
    switch (action.type) {
        case CLICK_RIGHT_INDICATOR:
            return {
                ...state,
                leftIndicatorVisible: action.payload.leftIndicatorVisible,
                rightIndicatorVisible: action.payload.rightIndicatorVisible
            };
        case CLICK_LEFT_INDICATOR:
            return {
                ...state,
                leftIndicatorVisible: action.payload.leftIndicatorVisible,
                rightIndicatorVisible: action.payload.rightIndicatorVisible
            };
        case LOGIN_SUCCESS:
            return { ...state }
        case LOGIN_FAIL:
            return { ...state }
        case REGISTER_SUCCESS:
            return {...state}
        case REGISTER_FAIL:
            return {...state}
        default:
            return state;
    }
}


//action creator
function clickRight(direction, leftIndicatorVisible, rightIndicatorVisible) {
    if (direction === 'right') {
        return { type: CLICK_RIGHT_INDICATOR, payload: { leftIndicatorVisible, rightIndicatorVisible } }
    } else {
        return { type: CLICK_LEFT_INDICATOR, payload: { leftIndicatorVisible, rightIndicatorVisible } }
    }
}

function success(type,data){
    return {type:type,data:data}
}

function fail(type,data){
    return {type:type,data:data}
}

export function clickIndicator({ direction, node, offset, start }) {
    return dispatch => {
        if (direction === 'right') {
            if (!start) {
                node.style.cssText = `margin-left:-${offset}px;`;
            } else {
                node.style.cssText = `margin-left:${Number.parseInt(start, 10) - offset}px;`;
            }
        } else {
            node.style.cssText = `margin-left:${Number.parseInt(start, 10) + offset}px;`;
            if (Number.parseInt(start, 10) + offset === 0) {
                dispatch(clickRight(direction, false, true));
                return;
            }
        }
        dispatch(clickRight(direction, true, true))

    }
}

export function login(data) {
    return dispatch => {
        Axios.post('/login',data)
            .then(res => {
                if (res.status === 200) {
                    dispatch(success(LOGIN_SUCCESS,res.data.data));
                } else {
                    dispatch(fail(LOGIN_FAIL,res.data.data));
                }
            })
    }
}

export function register(data){
    return dispatch => {
        Axios.post('/register',data)
            .then(res => {
                if (res.status === 200) {
                    dispatch(success(REGISTER_SUCCESS,res.data.data));
                } else {
                    dispatch(fail(REGISTER_FAIL,res.data.data));
                }
            })
    }
}