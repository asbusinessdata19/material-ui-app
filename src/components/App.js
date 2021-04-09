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
import LoadingMask from './LoadingMask';
import { loadIntialData } from '../actions/shared'

import Squestion from './Squestion';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadIntialData());
  }
  render() {
    return (
      <div className="App">
        {this.props.loading && <LoadingMask />}
        {
          (this.props.authedUser != null) ? <NavBar authedUser={this.props.authedUser} dispatch={this.props.dispatch} /> : ''
        }
        <Route exact path="/login" >
          {this.props.authedUser != null ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route exact path="/" >
          {this.props.authedUser != null ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/add" >
          {this.props.authedUser != null ? <NewQuestion /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/leaderboard" >
          {this.props.authedUser != null ? <LeaderBoard /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/question/:id" render={(props) => {
          return this.props.authedUser != null ? <Squestion props={props} /> : <Redirect to="/login" />
        }} />
        <Route path="*" >
          {this.props.authedUser != null ? <Redirect to="/" /> : <Redirect to="/login" />}
        </Route>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    authedUser: state.authedUser,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(App);
