
import * as React from 'react';
import { connect } from 'react-redux';
import { completeGoalRef, goalRef } from '../firebase';

class GoalItem extends React.Component<any, any> {
    completeGoal = () => {
        const { email } = this.props.user;
        const { title, serverKey } = this.props.goal;
        goalRef.child(serverKey).remove();
        completeGoalRef.push({ email, title });
    };

    public render(): JSX.Element {
        const { email, title } = this.props.goal;
        return (
            <div style={{ margin: '5px' }}>
                <strong> {title}</strong>
                <span> submitted by <em>{email}</em></span>
                <button
                    className="btn btn-sm btn-primary"
                    onClick={this.completeGoal}
                >
                    Complete
                </button>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    const { user } = state;
    return {
        user
    };
}

export default connect(mapStateToProps)(GoalItem);