import React from 'react';

export default function hocComp(Component) {
    class HocComp extends React.Component {
        constructor(props) {
            super(props);
        }

        componentDidUpdate(prevProps) {
            console.log('prevProps: ', prevProps);
            console.log('props: ', this.props);
        }

        render() {
            // Rest 参数接受函数的多余参数，组成一个数组，放在形参的最后
            // rest参数只包括那些没有给出名称的参数，arguments包含所有参数
            const { forwardedRef, ...rest } = this.props;
            console.log('Hoc: ', this.props);
            return (
                <div style={{ padding: '10px', border: '3px blue solid' }}>
                    <Component
                        { ...rest }
                        ref={ forwardedRef }></Component>
                </div>
            );
        }
    }
    return React.forwardRef((props, ref) => {
        return <HocComp
            {...props}
            forwardedRef={ref}></HocComp>
    });
}
