import * as React from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import AddGoal from './AddGoal';
import GoalList from './GoalList';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  };

  signOut = () => {
    firebaseApp.auth().signOut();
    this.props.history.push("/");
  };

  render() {
    return (
      <div style={{ margin: '5px' }}>
        <h3>Goal Coach</h3>
        <AddGoal />
        <hr />
        <h4>Goals</h4>
        <GoalList />
        <hr />
        <button
          className="btn btn-danger"
          onClick={this.signOut}
        >
          Sign Out</button>
      </div>
    );
  }
}

let mapStateToProps = (state: any) => {
  console.log('state', state);
  return {};
}

export default connect(mapStateToProps, {})(App);
