import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import CourseDetail_Enrolled from './course-detail__enrolled/course-detail__enrolled';
import CourseDetail__Unenroll from './course-detail__unenroll/course-detail__unenroll';
import VideoPlayer from '../../component/video-player/video-player';

export default function CourseDetailRouter(){
    return (
        <Switch>
            <Route exact path='/course-detail/enroll/:id' render={({match})=>(
                <Redirect to={`/course-detail/enroll/${match.params.id}/overview`} />
            )} />
            <Route path='/course-detail/enroll/:id/:menu' component={CourseDetail_Enrolled} />
            <Route path='/course-detail/unenroll/:id' component={CourseDetail__Unenroll} />
            <Route path='/course-detail/video/:id' component={VideoPlayer} />
        </Switch>
    )
}