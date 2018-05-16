import React from 'react';
import { Card } from 'antd';
import SectionHOC from 'HOC/sectionHOC/sectionHOC';
// import PropTypes from 'prop-types';
import './index.css';

@SectionHOC
class WhatWillILearn extends React.Component{
    render(){
        return(
            <Card title='What Will I Get' className='what-will-i-learn__wrapper' id='what-will-i-learn' >
                <ul className='what-will-i-learn__list' >
                    <li> All of Adobe After Effects – in a dynamic, hands on approach</li>
                    <li>Video Visual Effects, Motion Graphics and Compositing to create awesome Videos</li>
                    <li>A powerful step by step system to immediately start creating Animation and adding Visual Effects</li>
                    <li>Dive right in and start creating animation and visual effects</li>
                    <li>All the Useful Techniques and Methods used in After Effects</li>
                    <li>How to become an AE expert with 22+ Practice Activities and plenty of projects</li>
                    <li>How to Create Motion Graphics to Enhance your Videos</li>
                    <li>How to Use Visual Effects to get Amazing Videos</li>
                </ul>
            </Card>
        )
    }
}

// WhatWillILearn.propTypes = {
//     feature:PropTypes.array.isRequired
// }


export default WhatWillILearn;