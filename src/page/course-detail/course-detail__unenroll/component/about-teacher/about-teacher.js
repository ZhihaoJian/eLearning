import React from 'react';
import { Avatar, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './index.css'

class AboutTeacher extends React.Component {
    render() {
        return (
            <div className='about-teacher__wrapper' id='about-teacher'>
                <p className='title' >About Teacher</p>
                <div className='about-teacher__content' >
                    <div className='teacher-info' >
                        <Avatar
                            size='large'
                            icon='user'
                            style={{ width: 200, height: 200 }}
                            src='https://udemy-images.udemy.com/user/200_H/15601054_5545_21.jpg'
                        />
                        <div className='teacher-info__detail' >
                            <Icon type="star" />
                            <span>4.6 average rating</span>
                        </div>
                        <div className='teacher-info__detail' >
                            <Icon type="message" />
                            <span>7267 comment</span>
                        </div>
                        <div className='teacher-info__detail' >
                            <Icon type="user" />
                            <span>103378 students</span>
                        </div>
                        <div className='teacher-info__detail' >
                            <Icon type="video-camera" />
                            <span>14 courses</span>
                        </div>
                    </div>
                    <div className='teacher-experience__introduce'>
                        <div className='teacher-experience__name' >
                            <Link to='/teacher/1' >Louay Zambarakji</Link>
                        </div>
                        <div className='teacher-experience__experience' >
                            The Highest Rated After Effects Complete Course on Udemy.

    Video Editing, Animation, Motion Graphics and Visual Effects is what I love creating and teaching, Offline and Online.

    After Effects is what I love working with, every day, (except Sundays, my wife and kids won’t let me).

    I learned these the very hard way, very long time ago (since 1983) and I am still on it. It’s amazing when you discover that I used to use assembly language to animate sprites (think of PacMan), Green and B/W screens. Today I am animating Videos, 3D in a click.

    The Path to Mastery starts now. Being in the advertising industry has taught me that precision and a significant attention to details is very important, and makes the difference between a fake and life like animation.

    What You Will Learn from me:

    After Effects: The whole lot. In my course After Effects Complete Course packed with all Techniques and Methods (No Tricks and gimmicks).

    You can also dig deeper in the Mastery series, such as in 3D Mastery and 2D Character Animation courses.

    In some of my courses, you can also learn more commercial aspect of After Effects such slides, transitions and lower third templates. Very useful if you want to focus on what you want to achieve.

    Focus and Mastery are important elements for true skills creation.

    If you want to Really Learn About After Effects, then I will be more than happy to offer you all my skills, experience, and expertise.

    I guess 100,000+ Students is a good sign that my courses will be of benefit to you.

    Louay
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutTeacher;