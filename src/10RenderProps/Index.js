import React from 'react';

function List(props) {
    return (
        <ul>
            { props.render(props.users) }
        </ul>
    );
}

class RenderPropsComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { name: '张三', },
                { name: '李四', },
                { name: '王麻子', }
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>{ this.props.title }</h1>
                <List
                    render={users => {
                        return (
                            <React.Fragment>
                                {
                                    users.map((v, k) => (
                                        <li key={ k }>{ v.name }</li>
                                    ))
                                }
                            </React.Fragment>
                        )
                    }}
                    users={ this.state.users}></List>
            </div>
        );
    }
};

export default RenderPropsComp;
