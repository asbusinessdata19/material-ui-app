import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { connect } from 'react-redux'

class LeaderBoard extends React.Component {
    render() {
        let comps = [];
        let userIds = Object.keys(this.props.users);
        let scoreArray = [];
        // constructing score array
        for(let key of userIds){
            scoreArray.push({userId:key,score:Object.keys(this.props.users[key].answers).length + this.props.users[key].questions.length});
        }
        let array = scoreArray.sort(function(a,b){if(a.score>b.score){return -1} if(a.score<b.score){return 1} return 0});        
        for (let x = 0; x < array.length; x++) {
            let user = this.props.users[array[x].userId];            
            comps.push(
                <div key={user.id} style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ backgroundColor: '#'+x+x+x+x+x+x, margin: 5 }}>
                        <Card style={{ margin: 5, width: 500 }}>
                            <CardContent >
                                <Grid container sm>
                                    <Grid item sm={12}><Typography variant='h6' color='primary'>Rank : {x+1}</Typography></Grid>
                                    <Grid item sm={12}><Typography variant='h6' color='primary'>{user.name}</Typography></Grid>
                                    <Grid item sm={3} style={{ minWidth: 120 }}>
                                        <Avatar style={{ height: 100, width: 100, marginTop: 10 }} alt="profile picture" src={user.avatarURL} />
                                    </Grid>
                                    <Grid item sm={0.5}>
                                        <Divider style={{ marginRight: 5, marginTop: 5 }} orientation="vertical" />
                                    </Grid>
                                    <Grid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} item sm={5}>
                                        <Typography align='left' style={{ marginTop: 10 }} variant="subtitle1"> Answered Questions : {Object.keys(user.answers).length} </Typography>
                                        <Typography align='left' style={{ marginTop: 10 }} variant="subtitle1"> Created Questions : {user.questions.length} </Typography>
                                    </Grid>
                                    <Grid item sm={0.5}>
                                        <Divider style={{ marginRight: 5, marginTop: 5 }} orientation="vertical" />
                                    </Grid>
                                    <Grid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} item sm={3}>
                                        <Typography fullWidth align='center' style={{ marginTop: 10 }} variant="h5"> Score  </Typography>
                                        <Typography fullWidth align='center' style={{ marginTop: 10 }} variant="h6"> {Object.keys(user.answers).length + user.questions.length}   </Typography>

                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            )
        }
        return comps;        
    }
}
function mapStateToProps(state, props) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(LeaderBoard)