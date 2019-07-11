/**
 * 类
 * TypeScript 除了实现了所有 ES6 中的类的功能以外，还添加了一些新的用法
 * 接口（Interfaces）可以用于对「对象的形状（Shape）」进行描述
 **/
(() => {
    abstract class Animal {
        public name;
        public constructor(name) {
            this.name = name;
        }
        public abstract sayHi();
    }

    interface Alarm {
        alert();
    }

    class Cat extends Animal implements Alarm {
        public sayHi() {
            console.log(`Meow, My name is ${this.name}`);
        }
        public alert() {
            console.log('miao miao');
        }
    }

    let cat = new Cat('Tom');
})();
