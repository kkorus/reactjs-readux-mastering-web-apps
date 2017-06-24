import * as React from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';

interface ISingUpPros { };

type SignUpError = { message: string };

interface ISingUpState {
    email: string;
    password: string;
    error: SignUpError
};

class SingUp extends React.Component<ISingUpPros, ISingUpState> {
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

    signUp = () => {
        const { email, password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch((error: Error) => {
                this.setState({ error: error });
            });
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
                <h2>Sign Up</h2>
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
                        onClick={this.signUp}
                    >
                        Sign up
                     </button>

                </div>
                <div>{this.state.error.message}</div>
                <div><Link to="/signin">Already a user? Sign in instead</Link></div>
            </div>
        );
    }
}

export default SingUp;
