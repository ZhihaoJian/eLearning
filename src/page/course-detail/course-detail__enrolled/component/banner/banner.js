import React from 'react';
import CourseBanner from '../../../../../high-order-component/course-banner/course-banner';
import {Button} from 'antd';

class Banner extends React.Component{
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
                        <Button size='large' type='danger' >继续 讲座1</Button>
                </div>
            </div>
        )
    }
}

export default Banner = CourseBanner(Banner);