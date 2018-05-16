import React from 'react';
import './index.css';


export default function SectionHOC(CustomComponent){
    return class HOC extends React.Component{
        render(){
            const {style} = {...this.props}
            return(
                <div className='sectionHOC__wrapper' style={style} >
                   <CustomComponent {...this.props} />
                </div>
            )
        }
    }
}