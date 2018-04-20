import React from 'react';
import {Rate} from 'antd';
import {Link} from 'react-router-dom';
import CourseBanner from '../../../../../high-order-component/course-banner/course-banner';

class Banner extends React.Component{
    render(){
        return(
            <div style={{display:'flex','justifyContent': 'center'}} >
                <div>
                    <h1 className='course-banner__title' >After Effects CC: Complete Course from Novice to Expert</h1>
                    <div className='course-banner__headline' >Includes CC 2018 Updates - The Best Adobe After Effects CC Course. Design Professional Motion Graphics & Visual Effects</div>
                    <div className='course-banner__rate'>
                        <span style={{ marginRight: 20 }}>course rating</span>
                        <Rate disabled defaultValue={4.5} />
                        <span>total ( 21251 students scored )</span>
                    </div>
                    <div className='course-banner__info'>
                        <span>creator  <Link to='/teacher/:id'>Louay Zambarakji</Link></span>
                        <span>last update <span>3/18</span></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner = CourseBanner(Banner);