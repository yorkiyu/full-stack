import React from 'react';
import hocComp from './Hoc';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.users.map((v, k) => (
                    <li key={ k }>{ v.name }</li>
                ))}
            </ul>
        );
    }
}

export default hocComp(List);
