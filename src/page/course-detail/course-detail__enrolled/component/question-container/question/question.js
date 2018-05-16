import React from 'react';
import { Card,Avatar } from 'antd';
import './index.css';

class QuestionsCard extends React.Component{
    render(){
        return(
            <div className='question__wrapper' >
                 <Card>
                    <div className='avatar'>
                        <Avatar src='https://udemy-images.udemy.com/user/50x50/9019580_627c.jpg' type='user' size='large' />
                    </div>
                    <div className='question__body' >
                        <div className='question__title'>Heroku Deployment Like Experience</div>
                        <div className='question__subtitle'>
                            Hi,Is there any other server where we can push code to deploy applications just like heroku? Is it possible in AWS?Can anyone give some insights about how can I make my own VPS to work like that?
                        </div>
                        <div className='question__answer'>
                            <strong>0</strong> 回应
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default QuestionsCard;