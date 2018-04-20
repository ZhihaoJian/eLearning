import React from 'react';
import './index.css';

//课程详情页 banner,高阶组件
export default function CourseBanner(CustomCourseBannerComponent){
    return class CourseBanner extends React.Component {
        render() {
            return (
                <div className='course-banner' >
                    <div className='course-banner__wrapper'>
                        <div style={{display:'flex','justifyContent': 'center'}} >
                            <div>
                                <CustomCourseBannerComponent {...this.props} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}