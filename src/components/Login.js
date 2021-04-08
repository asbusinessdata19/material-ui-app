import React from 'react'
// ui components imports
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
// state management imports
import { login } from '../actions/authedUser'
import { connect } from 'react-redux'



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedUser: null
        }
    }
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20' }}>
                <Card variant="outlined" style={{ margin: 10, width: 400, backgroundColor: '#e6eeff' }}>
                    <CardHeader title='Would You Rather App Login' titleTypographyProps={{ color: 'primary' }}></CardHeader>
                    <CardContent >
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Typography align="right"> Username :</Typography>
                            <Select id='loginuserfield' onChange={(event) => {
                                let userId = event.target.value;
                                if (userId != undefined && userId != null && userId != '') {
                                    this.setState(()=>({
                                        selectedUser:this.props.users[userId]
                                    }))
                                } else {
                                    this.setState(()=>({
                                        selectedUser: null          
                                    }))
                                }                                
                            }} style={{ width: 200 }}>
                                {Object.keys(this.props.users).map((userId) => (
                                    <MenuItem key={userId} value={userId}>{userId}</MenuItem>
                                ))}
                            </Select>
                        </div>
                    </CardContent >
                    <CardActions disableSpacing style={{ display: "flex", alignItems: 'end', justifyContent: 'space-around' }}>
                        <Button color="primary" variant="contained" onClick={() => {                            
                            if(this.state.selectedUser!=null){
                                this.props.dispatch(login(this.state.selectedUser))
                            }else{
                                alert('You must select user to login')
                            }                            
                        }}>Login</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}
function mapStateToProps(state, props) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Login)
