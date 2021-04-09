import React from 'react'
import { connect } from 'react-redux'
import Question from './Question'


class Squestion extends React.Component {
    render() {        
        let isAnswered = false;
        if (Object.keys(this.props.authedUser.answers).includes(this.props.questionId)) {
            isAnswered = true;
        }
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }} >
                <Question question={this.props.questions[this.props.questionId]} authedUser={this.props.authedUser} questionAvatar={this.props.users[this.props.questions[this.props.questionId].author].avatarURL} viewType='SINGLE' isAnswered={isAnswered}  dispatch={this.props.dispatch}/>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        users: state.users,
        questions: state.questions,
        authedUser: state.authedUser,
        questionId: props.props.match.params.id
    }
}

export default connect(mapStateToProps)(Squestion);