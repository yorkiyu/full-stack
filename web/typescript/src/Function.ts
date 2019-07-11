/** 函数是 JavaScript 中的一等公民 */
(() => {
    /**
     * 一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到
     * 函数声明
     **/
    function sum(x: number, y: number): number {
        return x + y;
    }
    // use success
    sum(1, 2);
    // use error
    sum(1, 3, 5);
    // use error
    sum(false, 2);


    /**
     * 函数表达式
     * 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型
     **/
    let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
        return x + y;
    };

    /**
     * 用接口定义函数的形状
     **/
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }

    let mySearch: SearchFunc;
    mySearch = function(source: string, subString: string) {
        return source.search(subString) !== -1;
    }
    mySearch(1, 4);
    mySearch('1', '3');

    /**
     * 可选参数
     * 与接口中的可选属性类似，我们用 ? 表示可选的参数
     **/
    function buildName(firstName: string, lastName?: string) {
        if (lastName) {
            return firstName + ' ' + lastName;
        } else {
            return firstName;
        }
    }
    let tomcat = buildName('Tom', 'Cat');
    let tom = buildName('Tom');

    /**
     * 参数默认值
     * TypeScript 会将添加了默认值的参数识别为可选参数
     **/
    function defaultParams(firstName: string, lastName: string = 'Cat') {
        return firstName + ' ' + lastName;
    }
    defaultParams('Tom', 'Cat');
    defaultParams('Tom');


    /**
     * 剩余参数
     * ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）
     */
    function push(array: any[], name, ...items: any[]) {
        items.forEach(function(item) {
            array.push(item);
        });
    }

    let a = [];
    push(a, '剩余参数', 1, 2, 3);


    /**
     * 重载
     * 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理
     */
    function reverse(x: number): number;
    function reverse(x: string): string;
    function reverse(x: number | string): number | string {
        if (typeof x === 'number') {
            return Number(x.toString().split('').reverse().join(''));
        } else if (typeof x === 'string') {
            return x.split('').reverse().join('');
        }
    }
    reverse(123345);
    reverse("123345");
})();
