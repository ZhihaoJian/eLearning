import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Collapse, Icon } from 'antd';
import SectionHOC from 'HOC/sectionHOC/sectionHOC';
import './index.css';

const Panel = Collapse.Panel;


@SectionHOC
class CourseVideoList extends React.Component {
    render() {
        return (
            <div className='course-video-list__wrapper' id='course-video' >
                <p className='course-video__title' >Course's Video</p>
                <Collapse accordion defaultActiveKey={'1'} >
                    <Panel header="A Quick Start to Enable Your After Effects Skills" key="1" showArrow={false}>
                        <div>
                            <Icon type="video-camera" />
                            <Link to='/video/1' >How to Start Motion Graphics Now!</Link>
                            <span className='video-time' >1:03</span>
                        </div>
                        <div>
                            <Icon type="video-camera" />
                            <Link to='/video/1' >Udemy Secret Formula</Link>
                            <span className='video-time' >1:03</span>
                        </div>
                        <div>
                            <Icon type="video-camera" />
                            <Link to='/video/1' >Let's Dive In</Link>
                            <span className='video-time' >1:03</span>
                        </div>
                        <div>
                            <Icon type="video-camera" />
                            <Link to='/video/1' >An Important Preference to Set</Link>
                            <span className='video-time' >1:03</span>
                        </div>
                    </Panel>
                    <Panel header="Creating Your First Motion Graphics Video" key="2" showArrow={false}>
                        <div>
                            <Icon type="video-camera" />
                            <Link to='/video/1' >How to Start Motion Graphics Now!</Link>
                            <span className='video-time' >1:03</span>
                        </div>
                        <div>
                            <Icon type="video-camera" />
                            <Link to='/video/1' >Udemy Secret Formula</Link>
                            <span className='video-time' >1:03</span>
                        </div>
                        <div>
                            <Icon type="video-camera" />
                            <Link to='/video/1' >Let's Dive In</Link>
                            <span className='video-time' >1:03</span>
                        </div>
                        <div>
                            <Icon type="video-camera" />
                            <Link to='/video/1' >An Important Preference to Set</Link>
                            <span className='video-time' >1:03</span>
                        </div>
                    </Panel>
                    <Panel header="Essential Motion Graphics Techniques" key="3" showArrow={false}>
                        <div>
                            <Icon type="video-camera" />
                            <Link to='/video/1' >How to Start Motion Graphics Now!</Link>
                            <span className='video-time' >1:03</span>
                        </div>
                        <div>
                            <Icon type="video-camera" />
                            <Link to='/video/1' >Udemy Secret Formula</Link>
                            <span className='video-time' >1:03</span>
                        </div>
                        <div>
                            <Icon type="video-camera" />
                            <Link to='/video/1' >Let's Dive In</Link>
                            <span className='video-time' >1:03</span>
                        </div>
                        <div>
                            <Icon type="video-camera" />
                            <Link to='/video/1' >An Important Preference to Set</Link>
                            <span className='video-time' >1:03</span>
                        </div>
                    </Panel>
                </Collapse>
            </div>
        )
    }
}

export default CourseVideoList;