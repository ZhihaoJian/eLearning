import React from 'react';
import SectionHOC from 'HOC/sectionHOC/sectionHOC';
import CourseListCard from './course-list-card';

@SectionHOC
class CourseContent extends React.Component {
    render() {
        return (
            <div className='video-card__wrapper'>
                <CourseListCard/>
                <CourseListCard/>
                <CourseListCard/>
                <CourseListCard/>
            </div>
        )
    }
}

export default CourseContent;