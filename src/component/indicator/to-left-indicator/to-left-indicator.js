import React from 'react';
import {Icon} from 'antd';
import PropTypes from 'prop-types';
import './index.css';

class ToLeftIndicator extends React.Component{

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
            <div className='left indicator-wrapper' onClick={()=>this.handleClick('left')} ref={this.ref}>
                <Icon type="left" style={{fontSize:50,color:'#0a7c95'}} />
            </div>
        )
    }
}

ToLeftIndicator.propTypes = {
    onClickDirection:PropTypes.func.isRequired,
    visible:PropTypes.bool.isRequired
}

export default ToLeftIndicator;