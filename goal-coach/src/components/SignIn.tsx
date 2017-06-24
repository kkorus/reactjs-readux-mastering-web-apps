import * as React from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';

// interface ISingInPros { };

type SignUpError = { message: string };

interface ISingInState {
    email: string;
    password: string;
    error: SignUpError
};

class SingIn extends React.Component<any, ISingInState> {
    constructor(props: any) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        };
    }

    signIn = () => {
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            // .then(() => { this.props.history.push("/app") })
            .catch((error: Error) => {
                this.setState({ error: error });
            });

        console.log(this.state);
    };

    onEmailChange = (target: EventTarget): void => {
        var input = target as HTMLInputElement;
        this.setState({
            email: input.value
        });
    };

    onPasswordChange = (target: EventTarget): void => {
        var input = target as HTMLInputElement;
        this.setState({
            password: input.value
        });
    };

    public render(): JSX.Element {
        return (
            <div className="form-inline" style={{ margin: '5%' }}>
                <h2>Sign In</h2>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="email"
                        style={{ margin: '5%' }}
                        onChange={event => this.onEmailChange(event.target)}
                    />
                    <input className="form-control"
                        type="password"
                        placeholder="password"
                        style={{ margin: '5%' }}
                        onChange={event => this.onPasswordChange(event.target)}
                    />
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={this.signIn}
                    >
                        Sign In
                     </button>

                </div>
                <div>{this.state.error.message}</div>
                <div><Link to="/signup">Sign up instead</Link></div>
            </div>
        );
    }
}

export default SingIn;
