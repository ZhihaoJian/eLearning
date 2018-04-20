import React from 'react';
import './index.css';
import Banner from './component/banner/banner.js';
import WhatWillILearn from './component/what-will-i-learn/what-will-i-learn';
import CoursePreRequire from './component/course-pre-require/course-pre-require';
import CourseVideoList from './component/course-video-list/course-video-list';
import AboutTeacher from './component/about-teacher/about-teacher';
import CourseCommentContainer from './component/course-comment-container/course-comment-container';
import AnchorComponent from './component/anchor/anchor';

//课程详情（学生尚未加入课程）
class CourseDetail__Unenroll extends React.Component {
    render() {
        return (
            <div style={{ position: 'relative' }} >
                <Banner/>
                <WhatWillILearn />
                <CoursePreRequire />
                <CourseVideoList />
                <AboutTeacher />
                <CourseCommentContainer />
                <AnchorComponent />
            </div>
        )
    }
}

export default CourseDetail__Unenroll;