import React from 'react';
import {Switch,Route} from 'react-router-dom';
import CourseDetail_Enrolled from './course-detail__enrolled/course-detail__enrolled';
import CourseDetail__Unenroll from './course-detail__unenroll/course-detail__unenroll';

export default function CourseDetailRouter(){
    return (
        <Switch>
            <Route path='/course-detail/enroll/:id' component={CourseDetail_Enrolled} />
            <Route path='/course-detail/unenroll/:id' component={CourseDetail__Unenroll} />
        </Switch>
    )
}