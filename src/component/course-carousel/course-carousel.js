import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CourseCardComponent from '../course-card/course-card';
import ToRightIndicator from '../indicator/to-right-indicator/to-right-indicator';
import ToLeftIndicator from '../indicator/to-left-indicator/to-left-indicator';
import {clickIndicator} from '../../redux/index.redux';
import './index.css';

/**
 * 首页课程推荐列表跑马灯
 */
@connect(
    state=>state.interactReducer,
    {clickIndicator}
)
class CourseCarouselComponent extends React.Component{

    constructor(props){
        super(props);
        this.ref = React.createRef();
    }

    handleDirectionClik(direction){
        const node = this.ref.current,
            offset = 1300;
        let start = node.style.marginLeft;
        this.props.clickIndicator({direction,node,offset,start})
    }

    render(){
        return(
            <div className='new-course-list__wrapper'>
                <div className='new-course__type'>
                    <p>{this.props.name}</p>
                </div>
                <div className='course-slider' >
                    <div className='course-slider-list' ref={this.ref} >
                        <CourseCardComponent/>
                        <CourseCardComponent/>
                        <CourseCardComponent/>
                        <CourseCardComponent/>
                        <CourseCardComponent/>
                        <CourseCardComponent/>
                        <CourseCardComponent/>
                        <CourseCardComponent/>
                        <CourseCardComponent/>
                        <CourseCardComponent/>
                        <CourseCardComponent/>                                
                    </div>
                <ToRightIndicator 
                    onClickDirection={(direction)=>this.handleDirectionClik(direction)}
                    visible={this.props.rightIndicatorVisible} 
                />
                <ToLeftIndicator 
                    onClickDirection={(direction)=>this.handleDirectionClik(direction)} 
                    visible={this.props.leftIndicatorVisible} 
                />
                </div>
            </div>
        )
    }
}

CourseCarouselComponent.propTypes = {
    name:PropTypes.string.isRequired
}


export default CourseCarouselComponent;