/** 在 TypeScript 中，数组类型有多种定义方式，比较灵活 */
(() => {
    /** 「类型 + 方括号」表示法 */
    let fibonacci: number[] = [1, 1, 2, 3, 5];
    // error
    // 数组的项中不允许出现其他的类型
    fibonacci = [1, 2, 3, 4, false];

    /**
     * 数组泛型
     * Array<elemType>
     **/
    let fibonacci2: Array<number> = [1, 1, 2, 3, 5];

    /**
     * 用接口表示数组
     * 只要 index 的类型是 number，那么值的类型必须是 number
     **/
    interface NumberArray {
        [index: number]: number;
    }
    let fibonacci3: NumberArray = [1, 1, 2, 3, 5];

    /**
     * 任意值数组
     **/
    let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];

    /**
     * 类数组
     * Array-like Object
     **/
    // error
    function sum() {
        let args: number[] = arguments;
    }
    // success
    function sum2() {
        let args: IArguments = arguments;
    }
})();
