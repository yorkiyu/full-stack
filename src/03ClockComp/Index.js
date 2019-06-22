import React from 'react';

class ClockComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),
          1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>{ this.props.title }</h2>
                <p>{ this.state.date.toLocaleString() }</p>
            </div>
        );
    }
}
  
export default ClockComp;