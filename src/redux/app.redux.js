import {combineReducers} from "redux";
import { interactReducer } from './index.redux';
import {courseDetailReducer} from './course-detail.redux';
export const appReducer = combineReducers({
    interactReducer,
    courseDetailReducer
})