import React from 'react';

class BoundaryComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        console.log(error, info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <p style={{ color: 'red' }}>Something went wrong.</p>;
        }

        return this.props.children;
    }
};

export default BoundaryComp;
