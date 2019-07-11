/**
 * 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型
 * TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述
 **/
(() => {
    /**接口定义*/
    interface Person {
        name: string;
        age: number;
    }
    // success
    let tom: Person = {
        name: 'Tom',
        age: 25
    };
    // error
    let errorTom: Person = {
        name: 'Tom',
    };


    /** 可选属性 */
    interface Person2 {
        name: string;
        age?: number; // 可选
    }
    // success
    let Jack: Person2= {
        name: 'Jack'
    };
    // success
    let Jack2: Person2= {
        name: 'Jack2',
        age: 1
    };

    /** 任意属性 */
    interface Person3 {
        name: string;
        age?: number;
        [propName: string]: any;
    }
    // sucess
    let tom3: Person3 = {
        name: 'Tom3',
        age: 12,
        gender: 'male',
        a: 23,
    };


    /** 只读属性 */
    interface Person4 {
        readonly id: number;
        name: string;
        age?: number;
        [propName: string]: any;
    }

    let tom4: Person4 = {
        id: 89757,
        name: 'Tom',
        gender: 'male'
    };
    // error
    // Cannot assign to 'id' because it is a read-only
    tom4.id = 9527;


})();

