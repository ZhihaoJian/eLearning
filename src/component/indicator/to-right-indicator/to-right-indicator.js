import React from 'react';
import {Icon} from 'antd';
import PropTypes from 'prop-types';
import './index.css';

class ToRightIndicator extends React.Component{

    constructor(props){
        super(props);
        this.ref = React.createRef();
    }

    handleClick(direction){
        this.props.onClickDirection(direction);
    }

    componentDidMount(){
        const node = this.ref.current;
        this.props.visible ? node.style.visibility = 'visible' : node.style.visibility = 'hidden'; 
    }

    shouldComponentUpdate(nextProps){
        const node = this.ref.current;        
        if(nextProps.visible !== this.props.visible){
            nextProps.visible ? node.style.visibility = 'visible' : node.style.visibility = 'hidden';
            return true
        }
        return false;
    }

    render(){
        return(
            <div className='indicator-wrapper right' onClick={()=>this.handleClick('right')}  ref={this.ref} >
                <Icon type="right" style={{fontSize:50,color:'#0a7c95'}} />
            </div>
        )
    }
}

ToRightIndicator.propTypes = {
    onClickDirection:PropTypes.func.isRequired,
    visible:PropTypes.bool.isRequired    
}

export default ToRightIndicator;