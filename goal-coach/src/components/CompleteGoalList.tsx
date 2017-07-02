import * as React from 'react';
import { connect } from 'react-redux';
import { completeGoalRef } from '../firebase';
import { setCompleted } from '../actions/index';

class CompleteGoalList extends React.Component<any, any> {
    componentDidMount() {
        completeGoalRef.on('value', snap => {
            let completeGoals: any = [];
            snap || [].forEach((completeGoal: any) => {
                const { email, title } = completeGoal.val();
                completeGoals.push({ email, title });
            });
            this.props.setCompleted(completeGoals);
        });
    }

    clearCompleted = () => {
        completeGoalRef.set([]);
    };

    public render(): JSX.Element {
        return (
            <div>
                {
                    this.props.completedGoals.map((goal: any, index: number) => {
                        const { title, email } = goal;
                        return (
                            <div key={index}>
                                <strong>{title}</strong> completed by <em>{email}</em>
                            </div>
                        )
                    })
                }
                <button
                    className="btn btn-primary"
                    onClick={this.clearCompleted}>
                    Cear all
                </button>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    const { completedGoals } = state;
    return {
        completedGoals
    }
}

export default connect(mapStateToProps, { setCompleted })(CompleteGoalList);
