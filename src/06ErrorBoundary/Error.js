import React from 'react';

class ErrorComp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                { this.state.name }
            </div>
        );
    }
};

export default ErrorComp;
