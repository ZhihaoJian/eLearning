import React from 'react';
import SectionHOC from 'HOC/sectionHOC/sectionHOC';
import AnnouncementCard from './announcement-card';

@SectionHOC
class Announcement extends React.Component{
    render(){
        return(
            <div className='announcement-card__wrapper'>
                <AnnouncementCard/>
                <AnnouncementCard/>
                <AnnouncementCard/>
                <AnnouncementCard/>
            </div>
        )
    }
}

export default Announcement;