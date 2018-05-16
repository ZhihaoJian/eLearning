import React from 'react';
import './index.css';
import SectionHOC from 'HOC/sectionHOC/sectionHOC';
// import PropTypes from 'prop-types';

//课程前置知识
@SectionHOC
class CoursePreRequire extends React.Component{
    render(){
        return(
            <div className='course-pre-require__wrapper' id='course-pre-require' >
                <p>Require</p>
                <ul>
                    <li>No Prior Knowledge of After Effects, Text Animation or Motion Graphics Required</li>
                    <li>A working copy of After Effects CC 2015 or later versions</li>
                    <li>All project files are avaliable in CS6 - CC 2014 - 2016 and will auto convert to 2017 or 2018</li>
                </ul>
            </div>
        )
    }
}

// CoursePreRequire.propTypes = {
//     preKnowledge:PropTypes.array.isRequired
// }

export default CoursePreRequire;