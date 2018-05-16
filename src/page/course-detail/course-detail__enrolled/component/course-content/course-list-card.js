import React from 'react';
import './index.css';
import {withRouter} from 'react-router-dom';
import {Icon} from 'antd';

@withRouter
export default class CourseListCard extends React.Component{

    handleShowVideo(){
        this.props.history.push('/course-detail/video/1');
    }

    render(){
        return (
            <div className='course-card'>
                <div className='video-card__title' >
                    <div className='course-info'>
                        <span className='left' >节：1</span>
                        <span className='right' >0 / 1</span>
                    </div>
                    <div className='course-title'>Welcome</div>
                </div>
                    <div className='video-card__course_list'>
                        <div className='video-section' onClick={()=>this.handleShowVideo()} >
                            <div className='left'>
                                <span className='mr' >
                                    <Icon type="play-circle" />
                                </span>
                                <span>
                                    Welcome & Asking Awesome Questions
                                </span>
                            </div>
                            <div className='right'>
                                <span className='mr' >1:20</span>
                                <span>
                                    <Icon type="check-circle" />
                                </span>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}