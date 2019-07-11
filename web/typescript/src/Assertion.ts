/**
 * 类型断言（Type Assertion）可以用来手动指定一个值的类型
 * 语法：<类型>值，或值 as 类型
 **/
(() => {
    // success
    function getLength(something: string | number): number {
        // 使用类型断言，将 something 断言成 string
        if ((<string>something).length) {
            return (<string>something).length;
        } else {
            return something.toString().length;
        }
    }

    function getLength0(something: string | number): number {
        // 使用类型断言，将 something 断言成 string
        if ((something as string).length) {
            return (<string>something).length;
        } else {
            return something.toString().length;
        }
    }

    // error
    function getLength1(something: string | number): number {
        if (something.length) {
            return something.length;
        } else {
            return something.toString().length;
        }
    }


})();
