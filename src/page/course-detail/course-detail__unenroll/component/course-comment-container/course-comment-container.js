import React from 'react';
import CourseComment from './course-comment/course-comment';
import {Button} from 'antd';
import './index.css';

class CourseCommentContainer extends React.Component{
    render(){
        return(
            <div className='course-comment__wrapper' id='course-review' >
                <p className='title' >Review</p>
                <CourseComment/>
                <CourseComment/>
                <CourseComment/>
                <CourseComment/>
                <CourseComment/>
                <CourseComment/>
                <div style={{textAlign:'center',marginTop:30}} >
                    <Button type='default' size='large' style={{height:50}} >Show more review</Button>
                </div>
            </div>
        )
    }
}

export default CourseCommentContainer;