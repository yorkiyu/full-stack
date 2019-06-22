import React from 'react';

class EventComp extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(e) {
        e.stopPropagation();
        alert(`${ this.props.title }，点击弹框`);
    }

    render() {
        return (
            <div>
                <h1>{ this.props.title }</h1>
                <button
                    onClick={this.clickHandler}>点击弹窗</button>
            </div>
        );
    } 
};

export default EventComp;