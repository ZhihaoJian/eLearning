import React from 'react';
import {Avatar,Input} from 'antd';
import UserComment from './user-comment';
import './index.css';

class AnnouncementCard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            comment:'',
            isUserCommentOpen:false
        }
        this.ref = React.createRef();
    }

    handleCommentSubmit(comment){
        console.log(comment);
    }

    handleOpenComment(){
        const node = this.ref.current;
        const isUserCommentOpen = !this.state.isUserCommentOpen;
        node.classList.toggle('visible');
        this.setState({
            isUserCommentOpen
        })
    }

    render(){
        return(
            <div className='announcement-card' >
                <div className='announcement-card__timestamp'>
                    <div className='avatar'>
                        <Avatar/>
                    </div>
                    <div className='time-info'>
                        <span>Andrew</span>
                        <span>发布了一条公告 ·6 个月前</span>
                    </div>
                </div>
                <div className='announcement-card__body'>
                    <div className='announcement-card__title'>[Free Mini-Course] Diving into ESLint</div>
                    <div className='announcement-card__content'>
                        Andrew here.

                        I just released a free mini-course on ESLint. This three-part series will show you how to setup ESLint for your Node and React projects. It also covers integration with Visual Studio Code.

                        ESLint is a JavaScript linter. It scans your files for mistakes and points them out so that you can fix them before you run the program. It'll help you catch bugs, write better code, and ensure that you don't fall into any common pitfalls.

                        Check out the free mini-course now.

                        Enjoy! 

                        - Andrew`
                    </div>
                </div>
                <div className='my-comment__wrapper'>
                    <span className='my-avatar' >
                        <Avatar/>
                    </span>
                    <Input placeholder='输入你的评论' size='large' onPressEnter={(e)=>this.handleCommentSubmit(e.target.value)} />
                </div>
                <div style={{marginTop:20}} >
                    <a className='more-comment__link' onClick={this.handleOpenComment.bind(this)} >More Comment</a>
                    <div className='user-comment__wrapper' ref={this.ref} >
                        <UserComment/>
                        <UserComment/>
                        <UserComment/>
                    </div>
                </div>
            </div>
        )
    }
}

export default AnnouncementCard;