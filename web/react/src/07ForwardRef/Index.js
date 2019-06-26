import React from 'react';

const List = React.forwardRef((props, ref) => {
    return (
        <ul ref={ ref }>
            {props.users.map((v, k) => (
                <li key={ k }>{ v.name }</li>
            ))}
        </ul>
    );
});

class IndexComp extends React.Component {
    constructor(props) {
        super(props);
        this.listRef = React.createRef();
        this.state = {
            users: [
                { name: '张三', },
                { name: '李四', }
            ]
        };
    }

    componentDidMount() {
        console.log(this.listRef.current);
    }

    render() {
        return (
            <div>
                <h1>{ this.props.title }</h1>
                <List
                    users={ this.state.users }
                    ref={ this.listRef }></List>
            </div>
        );
    }
};

export default IndexComp;
