import * as React from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
// import { RouteComponentProps } from 'react-router-dom';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
// interface IAppProps extends RouteComponentProps<{}> { }

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
      <div>
        App
        <AddGoal />
        <GoalList />
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
