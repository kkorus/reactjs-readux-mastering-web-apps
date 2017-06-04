import * as React from 'react';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

class App extends React.Component<{}, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            deadline: 'December 25, 2017',
            newDeadline: ''
        };
    }

    changeDeadline = (): void => {
        this.setState({
            deadline: this.state.newDeadline
        });
    }

    onDeadlineChange = (target: EventTarget): void => {
        var input = target as HTMLInputElement;
        this.setState({
            newDeadline: input.value
        });
    }

    render(): JSX.Element {
        return (
            <div className='App'>
                <div className='App-title'>
                    Countdown to {this.state.deadline}
                </div>
                <Clock deadline={this.state.deadline} />
                <Form inline>
                    <FormControl
                    className='Deadline-input'
                        placeholder='Insert new date'
                        onChange={event => this.onDeadlineChange(event.target)}
                    />
                    <Button onClick={this.changeDeadline}>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default App; 