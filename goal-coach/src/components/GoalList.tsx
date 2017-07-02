import * as React from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';
import { setGoals } from '../actions/index';
import GoalItem from './GoalItem';

class GoalList extends React.Component<any, any> {
    componentDidMount() {
        let goals: { email: string, title: string, serverKey: string }[] = [];
        goalRef.on('value', snap => {
            if (snap) {
                snap.forEach(goal => {
                    const { email, title } = goal.val();
                    const serverKey = goal.key || "";
                    goals.push({ email, title, serverKey });
                    return true;
                });
            }

            this.props.setGoals(goals);
        })
    }

    public render(): JSX.Element {
        return (
            <div>
                {
                    this.props.goals((goal: any, index: number) => {
                        return <GoalItem key={index} goal={goal} />
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    const { goals } = state;
    return {
        goals
    }
}

export default connect(mapStateToProps, { setGoals })(GoalList);
