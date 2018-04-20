import React from 'react';
import {Button} from 'antd';
import './index.css';

class AnchorComponent extends React.Component{
    render(){
       return(
           <div className='anchor' >
                <ul>
                    <li>
                        <a href='#what-will-i-learn' >What Will I Get</a>                    
                    </li>
                    <li>
                        <a href='#course-pre-require'>Require</a>                    
                    </li>
                    <li>
                        <a href='#course-video'>Course's Video</a>                    
                    </li>
                    <li>
                        <a href='#about-teacher'>About Teacher</a>                    
                    </li>
                    <li>
                        <a href='#course-review' >Review</a>                    
                    </li>
                    <li>
                        <Button 
                            size='large' 
                            type='primary' 
                            style={{width:'100%',height:'100%',fontSize:25}} >
                            Enroll now !
                        </Button>
                    </li>
                </ul>
           </div>
       )
    }
}

export default AnchorComponent;