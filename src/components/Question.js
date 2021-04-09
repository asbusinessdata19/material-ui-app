import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import {handleAnswerQuestion} from '../actions/questions'
import {showMask,hideMask} from '../actions/loading'


export default function Question(props) {    
    let option1NumberOfAnswers = props.question.optionOne.votes.length;
    let option2NumberOfAnswers = props.question.optionTwo.votes.length;
    let totalAnswers = option1NumberOfAnswers + option2NumberOfAnswers;
    let option1Percentage = 0;
    let option2Percentage = 0;
    if(totalAnswers>0){
        option1Percentage = Math.round((option1NumberOfAnswers*100)/totalAnswers);
        option2Percentage = Math.round((option2NumberOfAnswers*100)/totalAnswers);
    }
    let selectedAnswer = null;
    return (
        <Card style={{ margin: 10, width: 450 }}>
            <CardContent >
                <Grid container sm>
                    <Grid item sm={12}>
                        <Typography style={{ textAlign: 'left', marginTop: 10, color: 'gray' }} variant="h6"> Asked by {props.question.author}  </Typography>
                        <Divider />
                    </Grid>
                    <Grid item sm={3} style={{ minWidth: 120 }}>
                        <Avatar style={{ height: 120, width: 100, marginTop: 10 }} alt="profile picture" src={props.questionAvatar} />
                    </Grid>
                    <Grid item sm={0.6}>
                        <Divider style={{ marginRight: 15, marginTop: 5 }} orientation="vertical" />
                    </Grid>
                    <Grid item sm={8}>
                        {props.viewType == 'LIST' ? (
                            <div>
                                <Typography variant="subtitle1" style={{ textAlign: 'left' }}>Would you rather ?</Typography>
                                <Typography variant="subtitle2">...{props.question.optionOne.text}... </Typography>
                                <br />                                
                                <Typography color='primary'><Link  to={'/question/' + props.question.id} style={{ color: 'inherit', textDecoration: 'inherit' }}>View Poll </Link></Typography>
                            </div>
                        ) : !props.isAnswered ? (
                            <div>
                                <Typography variant="subtitle1" style={{ textAlign: 'left' }}>Would you rather ?</Typography>
                                <RadioGroup id='answerField' aria-label="quiz" name="quiz" onChange={(event) => {                                    
                                    selectedAnswer=event.target.value;
                                 }}>
                                    <FormControlLabel value="optionOne" control={<Radio />} label={props.question.optionOne.text} />
                                    <FormControlLabel value="optionTwo" control={<Radio />} label={props.question.optionTwo.text} />
                                </RadioGroup>
                                <Button type="submit" variant="outlined" color="primary" onClick={(event)=>{                                    
                                    if(selectedAnswer!=null){
                                        props.dispatch(showMask());
                                        props.dispatch(handleAnswerQuestion(props.authedUser.id,props.question.id,selectedAnswer));                                        
                                    }else{
                                        alert('You must select an answer to submit it')
                                    }
                                    
                                }}>
                                    Submit
                                </Button>
                            </div>
                        ) :
                            <div>
                                
                                <Typography variant="subtitle1" style={{ textAlign: 'left' }}>Results:</Typography>
                                <div style={props.authedUser.answers[props.question.id]=='optionOne'?{backgroundColor:'#87ceeb'}:{}}>
                                <Typography variant="subtitle2"> would you rather {props.question.optionOne.text} </Typography>
                                <Box display="flex" alignItems="center">
                                    <Box width="100%" mr={1}>
                                        <LinearProgress variant="determinate" value={option1Percentage} />
                                    </Box>
                                    <Box minWidth={40}>
                                        <Typography variant="body2" color="textSecondary">{option1Percentage+' %'}</Typography>
                                    </Box>
                                </Box>                                
                                <Typography variant="caption">  {option1NumberOfAnswers+' out of '+totalAnswers+' votes'} </Typography>
                                </div>
                                <div style={props.authedUser.answers[props.question.id]=='optionTwo'?{backgroundColor:'#87ceeb'}:{}}>
                                <Typography variant="subtitle2"> would you rather {props.question.optionTwo.text} </Typography>
                                <Box display="flex" alignItems="center">
                                    <Box width="100%" mr={1}>
                                    <LinearProgress variant="determinate" value={option2Percentage} />
                                    </Box>
                                    <Box minWidth={40}>
                                    <Typography variant="body2" color="textSecondary">{option2Percentage+' %'}</Typography>
                                    </Box>
                                </Box>
                                <Typography variant="caption">  {option2NumberOfAnswers+' out of '+totalAnswers+' votes'} </Typography>
                                </div>
                            </div>}
                    </Grid>
                </Grid>             

            </CardContent>
        </Card>
    );
}