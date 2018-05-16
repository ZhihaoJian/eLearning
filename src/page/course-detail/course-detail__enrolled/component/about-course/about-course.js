import React from 'react';
import SectionHOC from 'HOC/sectionHOC/sectionHOC';
import './index.css';

@SectionHOC
class AboutCourse extends React.Component{
    render(){
        return(
            <div className='about-course__overview' >
                <p>About this course</p>
                <div className='course__desc' >Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!</div>
                <div className='course-config__wrapper'>
                    <div className='course-config__row' >
                        <div className='left'>
                            <span>
                                说明
                            </span>
                        </div>
                        <div className='right onDesc'>
                        This course was just updated to cover Node version 9 & ES7 Async/Await.

                        --

                        Have you tried to learn Node before? You start a new course, and the instructor has you installing a bunch of libraries before you even know what Node is or how it works. You eventually get stuck and reach out to the instructor, but you get no reply. You then close the course and never open it again.

                        Sound familiar?

                        I created this course to be what I wanted when I was learning Node.

                        The Complete Node.js Developer Course 2 covers the fundamentals of Node before diving deep into great tools like Express, Mongoose, and MongoDB.

                        The entire course is based around a single goal: Turning you into a professional Node developer capable of developing, testing, and deploying real-world production applications.

                        The best way to learn Node is by building Node apps.
                        </div>
                    </div>
                </div>
                <div className='course-config__wrapper'>
                    <div className='course-config__row' >
                        <div className='left'>
                            <span>
                                按编号
                            </span>
                        </div>
                        <div className='right onId'>
                            <ul>
                                <li>讲座： 134</li>
                                <li>视频： 26.5 hours</li>
                                <li>技能等级： 所有级别</li>
                                <li>72542 名学生</li>
                                <li>72542 名学生</li>
                                <li>标题</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='course-config__wrapper'>
                    <div className='course-config__row' >
                        <div className='left'>
                            <span>
                                讲师
                            </span>
                        </div>
                        <div className='right'>
                            <div className='teacher-info' >
                                <img src='https://udemy-images.udemy.com/user/200_H/4387876_78bc.jpg' alt='' />
                                <div className='teacher-info__wrapper' >
                                    <span className='teacher-info__name' >Rob Percival</span>    
                                    <div> Web Developer And Teacher </div>
                                </div>                                    
                            </div>
                        I'm Andrew, a full-stack developer living in beautiful Philadelphia!

I launched my first Udemy course in 2014 and had a blast teaching and helping others. Since then, I've launched 3 courses with over 110,000 students and over 18,000 5-star reviews.

I currently teach JavaScript, React, and Node.

Before I ever heard about Udemy or thought about teaching, I created a web app development company. I've helped companies of all sizes launch production web applications to their customers. I've had the honor of working with awesome companies like Siemens, Mixergy, and Parkloco.

I have a Computer Science degree from Temple University, and I've been programming for just over a decade. I love creating, programming, launching, learning, teaching, and biking.

I can't wait to see you inside one of my courses!
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutCourse ;