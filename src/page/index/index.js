import React from 'react';
import { Layout,Input  } from 'antd';
import CourseCarouselComponent from '../../component/course-carousel/course-carousel';
import './index.css';

const {Content} = Layout;
const Search = Input.Search;

class IndexPage extends React.Component{
    render(){
        return(
            <Content style={{backgroundColor:'#fff'}} >
                <div className='index-page' >
                    <div className='notice-streamer' >
                        <div className='search' >
                            <p className='notice-streamer__headline' >Explore the courses you want to learn</p>
                            <Search
                                className='search-input'
                                placeholder="What do you want to learn"
                                onSearch={value => console.log(value)}
                            />
                        </div>
                    </div>
                    <div className='new-channel'>
                        <div className='how-elearning-work' >
                            <div className='how-elearning-work__col'>
                                <span className='how-elearning-work__label lt'>
                                    <img src={require('./img/lt-logo.svg')} alt=''/>
                                </span>
                                <div className='how-elearning-work__text'>
                                    <b>65000 online courses</b>
                                </div>
                            </div>
                            <div className='how-elearning-work__col'>
                                <span className='how-elearning-work__label ct'>
                                    <img src={require('./img/md-logo.svg')} alt=''/>                                    
                                </span>        
                                <div className='how-elearning-work__text'>
                                    <b>Professional teacher guidance</b>
                                </div>                    
                            </div>
                            <div className='how-elearning-work__col'>
                                <span className='how-elearning-work__label rt'>
                                    <img src={require('./img/rt-logo.svg')} alt=''/>                                
                                </span>                            
                                <div className='how-elearning-work__text'>
                                    <b>Free study time</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='new-course-list'>
                        <CourseCarouselComponent name='"Design" popular course' />
                        <CourseCarouselComponent name='"Development" popular courses' />
                        <CourseCarouselComponent name='"Business" popular course' />
                        <CourseCarouselComponent name='Students are viewing' />
                    </div>
                </div>
            </Content>
        )
    }
}

export default IndexPage;