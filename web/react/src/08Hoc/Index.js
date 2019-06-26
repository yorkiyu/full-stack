import React from 'react';
import List from './List';

class IndexComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { name: '张三', },
                { name: '李四', },
                { name: '王麻子', }
            ]
        };
        this.listRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.listRef);
    }

    render() {
        return (
            <div>
                <h1>{ this.props.title }</h1>
                <List
                    users={this.state.users}
                    ref={ this.listRef }></List>
            </div>
        );
    }
};

export default IndexComp;
