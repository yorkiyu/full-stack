import React from 'react';
import ErrorComp from './Error';
import BoundaryComp from './Boundary';

class IndexComp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{ this.props.title }</h1>
                <p>父组件，没有错误~</p>
                <BoundaryComp>
                    <ErrorComp></ErrorComp>
                </BoundaryComp>
            </div>
        );
    }
};

export default IndexComp;
