import React from 'react'
import '../App.css';
import NavBar from './NavBar'
import 'fontsource-roboto';
import Login from './Login'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import {handleGetUsers} from '../actions/users'
import {handleGetQuestions} from '../actions/questions'
import Squestion from './Squestion';

class App extends React.Component {
  componentDidMount(){
    this.props.dispatch(handleGetUsers());
    this.props.dispatch(handleGetQuestions());
  }
  render() {
    return (
      <div>
        {
          (this.props.authedUser != null) ? <NavBar authedUser={this.props.authedUser} dispatch={this.props.dispatch} /> : ''
        }
        <div className="App">
          <Route path="/login" >
            {this.props.authedUser != null ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/" >
            {this.props.authedUser != null ? <Home /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/New" >
            {this.props.authedUser != null ? <NewQuestion /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/Leaderboard" >
            {this.props.authedUser != null ? <LeaderBoard /> : <Redirect to="/login" />}
          </Route>
          <Route  path="/question/:id" render={(props)=>{            
            return this.props.authedUser != null ? <Squestion props={props}/> : <Redirect to="/login" />}}/>                    
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    authedUser: state.authedUser
  }
}

export default connect(mapStateToProps)(App);
