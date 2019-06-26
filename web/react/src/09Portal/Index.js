import React from 'react';
import GoTop from './GoTop';
import './Index.css';

class IndexComp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{ this.props.title }</h1>
                GoTop，兄弟元素dom元素，不再这儿
                <GoTop></GoTop>
            </div>
        );
    }
};

export default IndexComp;
