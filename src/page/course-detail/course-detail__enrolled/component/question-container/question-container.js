import React from 'react';
import {Button,Card,Input} from 'antd';
import {connect} from 'react-redux';
import Editor from 'Component/editor/editor';
import {onSearch} from 'Redux/course-detail.redux';
import SectionHOC from 'HOC/sectionHOC/sectionHOC'
import QuestionsCard from './question/question';
import './index.css';

@connect(
    state=>state.courseDetailReducer,
    {onSearch}
)
@SectionHOC
class QuestionContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showQA:false
        }
    }

    handleSubmit(e){
        const keyword = e.target.value;
        this.props.onSearch(keyword);
    }


    render(){
        return(
            <div>
                {
                    !this.state.showQA ? (
                        <div>
                            <div className='question__search_box' >
                                <Card className='question__search_box_card' >
                                    <Input placeholder="Search a question" className='search-input' size='large' onPressEnter={(e)=>this.handleSubmit(e)} />
                                    <span>or</span>
                                    <Button className='ask-question' type='primary' onClick={()=>this.setState({showQA:true})} >Ask for help</Button>
                                </Card>
                            </div>
                            <QuestionsCard/>
                            <QuestionsCard/>
                            <QuestionsCard/>
                            <QuestionsCard/>
                            <QuestionsCard/>
                            <div className='load-more' >
                                <Button type='primary' >Load More</Button>
                            </div>
                        </div>
                    ) : (
                        <div className='editable__wrapper' >
                            <Input size='large' placeholder='Please enter your question.' style={{marginBottom:30,height:50}} />
                            <Editor/>
                            <div className='opera-btn' >
                                <Button 
                                    onClick={()=>this.setState({showQA:false})} 
                                    type='danger'>
                                    cancel
                                </Button>
                                <Button
                                    type='primary'
                                >Submit</Button>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default QuestionContainer;