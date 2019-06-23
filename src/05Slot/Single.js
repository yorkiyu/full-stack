import React from 'react';
function Content(props) {
    return (
        <div style={{ padding: '10px', border: '1px red solid' }}>
            <ul >
                { props.children }
            </ul>
        </div>
    );
}

class SingleComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [
                { name: '腾讯' },
                { name: '阿里' },
                { name: '百度' },
            ]
        };
    }

    render() {
        return (
            <div>
                <h1>{ this.props.title }</h1>
                {/** Content组件中的子元素，将被挂载到props.childern中 */}
                <Content>
                    {
                        this.state.lists.map((v, k) => {
                            return (
                                <li key={k}>{ k + 1 }. { v.name }</li>
                            )
                        })
                    }
                </Content>
            </div>
        );
    }
};

export default SingleComp;
