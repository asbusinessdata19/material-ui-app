import React from 'react'
import Question from './Question'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { connect } from 'react-redux'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.filterQuestions = this.filterQuestions.bind(this);
        this.state = {
            isAnswered: false,
            questionToShow: this.filterQuestions(false)
        };
    }
    filterQuestions = function (isAnswered) {
        let currentUser = this.props.authedUser.id;
        let result = {};
        let questionsArray = [];
        // construct questions array
        for(let questionId of Object.keys(this.props.questions)){
            questionsArray.push({question:questionId , createTime:this.props.questions[questionId].timestamp});
        }
        // sorting the questions Desc by createTime
        let qs = questionsArray.sort(function(a,b){
            if(a.createTime>b.createTime){
                return -1;
            }
            if(a.createTime<b.createTime){
                return 1;
            }
            return 0
        });

        for (let q of qs) {
            let questionId = q.question;
            if (this.props.questions[questionId].optionOne.votes.includes(currentUser) || this.props.questions[questionId].optionTwo.votes.includes(currentUser)) {
                if (isAnswered) {
                    result[questionId] = this.props.questions[questionId];
                }
            } else if (!isAnswered) {
                result[questionId] = this.props.questions[questionId];
            }
        }        
        return result;
    }
    render() {
        return (
            <div>
                <ButtonGroup disableElevation variant="contained" style={{ marginTop: 10, marginRight: 10 }}>
                    <Button color={this.state.isAnswered ? 'primary' : 'secondary'} onClick={() => {
                        this.setState(() => ({
                            isAnswered: false,
                            questionToShow: this.filterQuestions(false)
                        }));
                    }}>Unanswerd Questions</Button>
                    <Button color={this.state.isAnswered ? 'secondary' : 'primary'} onClick={() => {
                        this.setState(() => ({
                            isAnswered: true,
                            questionToShow: this.filterQuestions(true)
                        }));
                        ;

                    }}>Answerd Questions</Button>


                </ButtonGroup>
                <Grid container spacing={1}>
                    {Object.keys(this.state.questionToShow).map((questionId) => (
                        <Grid key={questionId} item xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }} >
                                <Question question={this.state.questionToShow[questionId]} questionAvatar={this.props.users[this.state.questionToShow[questionId].author].avatarURL} viewType='LIST' isAnswered={this.state.isAnswered} />
                            </div>
                        </Grid>
                    ))
                    }
                </Grid>

            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        questions: state.questions,
        users: state.users,
        authedUser: state.authedUser
    }
}

export default connect(mapStateToProps)(Home)


