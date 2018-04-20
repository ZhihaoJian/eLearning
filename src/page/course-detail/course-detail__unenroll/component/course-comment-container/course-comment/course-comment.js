import React from 'react';
import {Avatar,Rate,Button } from 'antd';
import './index.css';

class CourseComment extends React.Component {
    render() {
        return (
                <div className='course-comment__block' >
                    <div className='left'>
                        <div >
                            <Avatar size='large' >U</Avatar>
                            <div className='comment-user-info' >
                                <div>David Erickson</div>
                                <div>1 month ago</div>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='course-rating'>
                            <Rate disabled defaultValue={4} />
                        </div>
                        <div className='course-comment' >
                        This is an incredibly complete course on After Effects. If you complete this course and practice you will be able to do create pretty great animations. It is evident that the instructor has made a long career using After Effects and that he takes a great pleasure in imparting the knowledge that he has gained. The course is full of great tips that you would not have learned on you own, or only after great trial and error. Highly recommended.
                        </div>
                        <div className='is-useful-comment' >
                            Was this review helpful?
                            <Button  type='default' >Yes</Button>
                            <Button  type='default' >No</Button>
                        </div>
                    </div>
                </div>
        )
    }
}

export default CourseComment;