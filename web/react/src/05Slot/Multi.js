import React from 'react';

// 左边slot
function LeftContent(props) {
    return (
        <div style={{ display: 'inline-block', width: '100px', backgroundColor: "#f0f0f0" }}>
            { props.text }
        </div>
    );
}

// 右边slot
function RightConente(props) {
    return (
        <div style={{ display: 'inline-block', width: '100px', backgroundColor: "#555555" }}>
            { props.text }
        </div>
    );
}

function Content(props) {
    return (
        <div style={{ padding: '10px', border: '1px blue solid' }}>
            { props.left }
            { props.right }
        </div>
    );
}

class MultiComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: {
                text: '这是左边',
            },
            right: {
                text: '这是右边',
            }
        };
    }

    render() {
        return (
            <div>
                <h1>{ this.props.title }</h1>
                {/** 多个slot，显示使用 */}
                <Content
                    left={
                        <LeftContent
                            text={ this.state.left.text }/>
                    }
                    right={
                        <RightConente
                            text={ this.state.right.text }/>
                    }>
                </Content>
            </div>
        );
    }
};

export default MultiComp;
