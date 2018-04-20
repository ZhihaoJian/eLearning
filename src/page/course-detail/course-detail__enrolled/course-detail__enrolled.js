import React from 'react';
import Banner from './component/banner/banner';
import './index.css';

//已加入课程的页面，显示视屏、问答、公告等
class CourseDetail_Enrolled extends React.Component{
    render(){
        return(
            <div>
                <Banner {...this.props} />
            </div>
        )
    }
}

export default CourseDetail_Enrolled;