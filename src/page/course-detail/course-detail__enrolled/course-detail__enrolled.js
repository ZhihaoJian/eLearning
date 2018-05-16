import React from 'react';
import Banner from './component/banner/banner';
import MenuComponent from './component/menu/menu';
import AboutCourse from './component/about-course/about-course';
import QuestionContainer from './component/question-container/question-container';
import CourseContent from './component/course-content/course-content';
import Announcement from './component/announcement/announcement';
import './index.css';

//已加入课程的页面，显示视屏、问答、公告等
class CourseDetail_Enrolled extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            current:'overview',
            showQA:false
        }
    }

    handleMenuShowUp(){
        const params = this.props.match.params;
        switch(params.menu){
            case 'content':
                return <CourseContent/> ;
            case 'questions':
                return <QuestionContainer />;
            case 'announcement':
                return <Announcement/>;
            default:
                return <AboutCourse style={{marginTop:50}} />
        }
    }

    render(){
        return(
            <div>
                <Banner {...this.props} /> 
                <MenuComponent 
                    current={this.state.current}
                    handleMenuChange={(current)=>this.setState({current})}
                 />
                 {
                     this.handleMenuShowUp()
                 }
            </div>
        )
    }
}

export default CourseDetail_Enrolled;