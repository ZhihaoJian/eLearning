import React from 'react';
import {Avatar} from 'antd';

export default function UserComment(){
    return(
        <div className='user-comment'>
            <div className='user-avatar'>
                <Avatar/>
            </div>
            <div className='user-ask__info'>
                <div className='user-name'>
                    <span>Wladimir Chopite</span>
                    <span style={{marginLeft:20}} >4 days ago</span>
                </div> 
                <p className='user-comment__body'>Excellent Andrew. Thanks!!!</p>
            </div>
        </div>
    )
}