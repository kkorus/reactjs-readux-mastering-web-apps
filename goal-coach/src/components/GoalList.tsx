import * as React from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';
import { setGoals } from '../actions/index';

interface ComponentNameProps { };

interface ComponentNameState { };

class GoalList extends React.Component<ComponentNameProps, ComponentNameState> {
    componentDidMount() {
        let goals: { email: string, title: string }[] = [];
        goalRef.on('value', snap => {
            if (snap) {
                snap.forEach(goal => {
                    const { email, title } = goal.val();
                    goals.push({ email, title });
                    return true;
                });
            }
        })
    }

    public render(): JSX.Element {
        return (<span>ComponentName</span>);
    }
}

export default connect(null, { setGoals })(GoalList);
