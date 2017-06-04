import * as React from 'react';
import './App.css';

interface IClockProps {
    deadline: string;
}

interface IClockState {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

class Clock extends React.Component<IClockProps, IClockState> {
    constructor(props: IClockProps) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    componentWillMount(): void {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    leading0(num: number): any {
        return num < 10 ? '0' + num : num;
    }

    getTimeUntil(deadline: string): void {
        const time = Date.parse(deadline) - new Date().getTime();
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor(time / (1000 * 60 * 60) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        this.setState({
            days,
            hours,
            minutes,
            seconds
        });
    }

    render(): JSX.Element {
        return (<div>
            <div className='Clock-days'>{this.leading0(this.state.days)} days</div>
            <div className='Clock-hours'>{this.leading0(this.state.hours)} days</div>
            <div className='Clock-minutes'>{this.leading0(this.state.minutes)} minues</div>
            <div className='Clock-seconds'>{this.leading0(this.state.seconds)} seconds</div>
        </div>);
    }
}

export default Clock;