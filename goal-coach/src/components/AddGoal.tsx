import * as React from 'react';
import { goalRef } from '../firebase';
import { connect } from 'react-redux';

class AddGoal extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: '',
        }
    }

    addGoal = () => {
        const { title } = this.state;
        const { email } = this.props.user;
        goalRef.push({ email: email, title: title });
    };

    onGoalInputChange = (target: EventTarget) => {
        var input = target as HTMLInputElement;
        this.setState({
            title: input.value
        })
    };

    public render(): JSX.Element {
        return (
            <div className="form-inline">
                <div className="form-group">
                    <input
                        className="form-control"
                        style={{ marginRight: '5px' }}
                        type="text"
                        placeholder="Add a goal"
                        onChange={event => this.onGoalInputChange(event.target)}
                    />
                    <button
                        className="btn btn-success"
                        type="button"
                        onClick={this.addGoal}
                    >
                        Submit
                    </button>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state: any) => {
    const { user } = state;
    console.log('state in addgoals.jsx', state);
    return {
        user
    };
};

export default connect(mapStateToProps, {})(AddGoal);
