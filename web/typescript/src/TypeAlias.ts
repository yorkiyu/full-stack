/**
 *  字符串字面量类型
 *  字符串字面量类型用来约束取值只能是某几个字符串中的一个
 **/

 (() => {
    type EventNames = 'click' | 'scroll' | 'mousemove';
    function handleEvent(ele: Element, event: EventNames) {
        // do something
    }

    // success
    handleEvent(document.getElementById('hello'), 'scroll');  // 没问题

    // error, Argument of type '"dbclick"' is not assignable to parameter of type 'EventNames'
    handleEvent(document.getElementById('world'), 'dbclick');

 })();
