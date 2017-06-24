import * as React from 'react';
import { firebaseApp } from '../firebase';
import { RouteComponentProps } from 'react-router-dom';

interface IAppProps extends RouteComponentProps<any> { }

class App extends React.Component<IAppProps, null> {
  signOut = () => {
    firebaseApp.auth().signOut();
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        App
       <button
          className="btn btn-danger"
          onClick={this.signOut}
        >
          Sign Out</button>
      </div>
    );
  }
}

export default App;
