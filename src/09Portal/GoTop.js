import React from 'react';
import ReactDom from 'react-dom';

const $body = document.querySelector('body');

function Child() {
    return (
        <div className="go-top">GoTop</div>
    );
}

class GoTopComp extends React.Component {
    constructor(props) {
        super(props);
        this.div = document.createElement('div');
        this.div.className = 'gotop-wrap';
        this.div.addEventListener('click', () => {
            document.documentElement.scrollTop = 0;
        });
    }

    componentDidMount() {
        console.log($body);
        $body.appendChild(this.div);
    }

    componentWillUnmount() {
        this.div.remove();
    }

    render() {
        return ReactDom.createPortal(
            Child(),
            this.div
        );
    }
};

export default GoTopComp;
