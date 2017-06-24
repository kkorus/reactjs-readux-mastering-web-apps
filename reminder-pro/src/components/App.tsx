import * as React from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions/index';
import * as moment from 'moment';

interface IReminder {
    text: string,
    id: number;
    dueDate: string;
}

interface IAppState {
    text: string;
    dueDate: string;
}

interface IAppProps {
    reminders: Array<IReminder>;
    addReminder: (name: string, dueDate: string) => void;
    deleteReminder: (id: number) => void;
    clearReminders: () => void
}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            text: '',
            dueDate: ''
        }
    }

    onTextChange = (target: EventTarget): void => {
        var input = target as HTMLInputElement;
        this.setState({
            text: input.value
        });
    };

    onDueDateChange = (target: EventTarget): void => {
        console.log(target);

        var input = target as HTMLInputElement;
        this.setState({
            dueDate: input.value
        });

    };

    addReminder = () => {
        this.props.addReminder(this.state.text, this.state.dueDate);
    };

    deleteReminder = (id: number) => {
        this.props.deleteReminder(id);
    };

    clearReminders = () => {
        this.props.clearReminders();
    }

    renderReminders(): JSX.Element {
        return (
            <ul className="list-group cols-sm-4">
                {this.props.reminders.map((reminder: IReminder) => {
                    return (
                        <li key={reminder.id} className="list-group-item">
                            <div className="list-item">
                                <div>{reminder.text}</div>
                                <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                            </div>
                            <div
                                className="list-item delete-button"
                                onClick={() => this.deleteReminder(reminder.id)}
                            >
                                &#x2715;
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }

    render() {
        console.log('props', this.props);
        return (
            <div className="App">
                <div className="title">
                    Reminder Pro
                </div>
                <div className="form-inline reminder-form">
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="I have to..."
                            onChange={event => this.onTextChange(event.target)}
                        />
                        <input
                            className="form-control"
                            type="datetime-local"
                            onChange={event => this.onDueDateChange(event.target)}
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={this.addReminder}
                    >
                        Add Reminder
                    </button>
                </div>
                {
                    this.renderReminders()
                }
                <div
                    className="btn btn-danger"
                    onClick={this.clearReminders}>
                    Clear Reminders
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        reminders: state
    }
}

export default connect(
    mapStateToProps,
    { addReminder, deleteReminder, clearReminders })
    (App);
