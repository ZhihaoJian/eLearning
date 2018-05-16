import React from 'react';
import CourseBanner from 'HOC/course-banner/course-banner';
import {withRouter} from 'react-router-dom';
import {Button} from 'antd';

@withRouter
class Banner extends React.Component{

    handleContinueLect(){
        this.props.history.push('/course-detail/video/1');
    }

    render(){
        return(
            <div className='course-enroll__wrapper' >
                <div className='course-thumb'>
                    <img src='https://udemy-images.udemy.com/course/480x270/922484_52a1_5.jpg' alt='course-img' />
                </div>
                <div className='course-info'>
                    <div className='course-title'>
                        The Complete Node.js Developer Course (2nd Edition)
                    </div>
                        <Button size='large' type='danger' onClick={this.handleContinueLect.bind(this)} >Continue Lecture 1</Button>
                </div>
            </div>
        )
    }
}

export default Banner = CourseBanner(Banner);