
import * as React from 'react';

class GoalItem extends React.Component<any, any> {
    public render(): JSX.Element {
        const { email, title } = this.props.goal;
        return (
            <div style={{ margin: '5px' }}>
                <strong> {title}</strong>
                <span> submitted by <em>{email}</em></span>
            </div>
        );
    }
}

export default GoalItem;
