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
import Box from '@material-ui/core/Box'


export default function Question(props) {        
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
                                <br/>                                
                                <Button type="submit" variant="outlined" color="primary" >
                                    View Poll
                                 </Button>
                            </div>
                        ) : !props.isAnswered ? (
                            <div>
                                <Typography variant="subtitle1" style={{ textAlign: 'left' }}>Would you rather ?</Typography>
                                <RadioGroup aria-label="quiz" name="quiz" onChange={() => { }}>
                                    <FormControlLabel value="best" control={<Radio />} label={props.question.optionOne.text} />
                                    <FormControlLabel value="worst" control={<Radio />} label={props.question.optionTwo.text} />
                                </RadioGroup>
                                <Button type="submit" variant="outlined" color="primary" >
                                    Submit
                                </Button>
                            </div>
                        ) :
                            <div>
                                 <Typography variant="subtitle1" style={{ textAlign: 'left' }}>Results:</Typography>
                                 <Typography variant="subtitle2"> would you rather {props.question.optionOne.text} </Typography> 
                                 <Box display="flex" alignItems="center">
                                    <Box width="100%" mr={1}>
                                        <LinearProgress variant="determinate" value={40} />
                                    </Box>
                                    <Box minWidth={35}>
                                        <Typography variant="body2" color="textSecondary">{'40 %'}</Typography>
                                    </Box>
                                </Box>
                                <Typography variant="caption"> 1 out of 3 votes </Typography>
                                <Typography variant="subtitle2"> would you rather {props.question.optionTwo.text} </Typography> 
                                 <Box display="flex" alignItems="center">
                                    <Box width="100%" mr={1}>
                                        <LinearProgress variant="determinate" value={60} />
                                    </Box>
                                    <Box minWidth={35}>
                                        <Typography variant="body2" color="textSecondary">{'60 %'}</Typography>
                                    </Box>
                                </Box>
                                <Typography variant="caption"> 2 out of 3 votes </Typography>                                                                
                            </div>}

                    </Grid>
                </Grid>
                {/* <Typography color="textSecondary" gutterBottom>
                        Word of the Day
                </Typography> */}

            </CardContent>
        </Card>
    );
}