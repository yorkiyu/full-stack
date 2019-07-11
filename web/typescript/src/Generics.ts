/**
 * 泛型
 * 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
 */

 (() => {
     // 泛型基本例子
    function createArray<T>(length: number, value: T): Array<T> {
        let result: T[] = [];
        for (let i = 0; i < length; i++) {
            result[i] = value;
        }
        return result;
    }

    createArray<string>(3, 'x'); // ['x', 'x', 'x']
    createArray<number>(3, 0); // [0, 0, 0]

    // 多个参数
    function swap<T, U>(tuple: [T, U]): [U, T] {
        return [tuple[1], tuple[0]];
    }
    swap([7, 'seven']); // ['seven', 7]

    function swap2<T, U>(a: T, b: U): [U, T] {
        return [b, a];
    }
    swap2<number, string>(7, 'seven'); // ['seven', 7]
    swap2<number, string>(7, false);


    /**
     * 泛型约束
     * 在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法
     * 我们可以对泛型进行约束
     **/
    interface Lengthwise {
        length: number;
    }
    function loggingIdentity<T extends Lengthwise>(arg: T): T {
        console.log(arg.length);
        return arg;
    }
    loggingIdentity<number[]>([1]);
    loggingIdentity<string>('111');
    loggingIdentity<number>(1);

    /**
     * 函数接口泛型约束
     * 可以使用含有泛型的接口来定义函数的形状
     */
    interface CreateArrayFunc<T> {
        (length: number, value: T): Array<T>;
    }
    let createArray3: CreateArrayFunc<any>;
    createArray3 = function<T>(length: number, value: T): Array<T> {
        let result: T[] = [];
        for (let i = 0; i < length; i++) {
            result[i] = value;
        }
        return result;
    }
    createArray3(3, 'x'); // ['x', 'x', 'x']


    /**
     * 泛型类
     * 与泛型接口类似，泛型也可以用于类的类型定义中
     **/
    class GenericNumber<T> {
        zeroValue: T;
        add: (x: T, y: T) => T;
    }

    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function(x, y) { return x + y; };
 })();
