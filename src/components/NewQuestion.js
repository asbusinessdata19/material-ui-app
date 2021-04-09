import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Divider, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import { handleSaveQuestion } from '../actions/questions'
import { showMask, hideMask } from '../actions/loading'
import { Redirect, withRouter } from 'react-router'


class NewQuestion extends React.Component {
    render() {
        debugger;
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card variant="outlined" style={{ margin: 10, width: 400}}>
                    <CardHeader title='Create New Question' titleTypographyProps={{ color: 'primary' }}>
                    </CardHeader>
                    <CardContent >
                        <Divider />
                        <Typography variant="subtitle1" align='left'>complete the question:</Typography>
                        <Typography variant="subtitle2" align='left'> Would you rather ...</Typography>
                        <TextField id='optionOneField' fullWidth style={{ margin: 5 }} required label="Option One" placeholder='Enter Option One Text Here ...' />
                        <TextField id='optionTwoField' fullWidth style={{ margin: 5 }} required label="Option Two" placeholder='Enter Option Two Text Here ...' />
                    </CardContent >
                    <CardActions disableSpacing style={{ display: "flex", alignItems: 'end', justifyContent: 'space-around' }}>
                        <Button color="primary" variant="contained" onClick={() => {
                            let optionOne = document.getElementById('optionOneField').value;
                            let optionTwo = document.getElementById('optionTwoField').value;
                            if (optionOne != null && optionOne != '' && optionOne.trim() != ''
                                && optionTwo != null && optionTwo != '' && optionTwo.trim() != '') {
                                this.props.dispatch(showMask());
                                this.props.dispatch(handleSaveQuestion(optionOne, optionTwo, this.props.authedUser.id,this.props.history));                            
                            } else {
                                alert('You must fill in all of the required fields');
                            }

                        }}>Submit</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        authedUser: state.authedUser,
        props: props
    }
}

export default compose(withRouter, connect(mapStateToProps))(NewQuestion)