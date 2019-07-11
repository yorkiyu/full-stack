/**
 * 类成员描述
 *
 */
(() => {
    // 接口定义
    interface ClockInterface {
        currentTime: Date;
        setTime(d: Date): void;
    }
    // 构造函数描述
    interface ClockConstructor {
        new (h: number, m: number);
    }

    const Clock: ClockConstructor = class Clock implements ClockInterface {
        currentTime: Date = new Date();
        setTime(d: Date) {
            this.currentTime = d;
        }
        constructor(h: number, m: number) { }
    }
    // success
    const clock = new Clock(1, 3);
    // error
    const clock2 = new Clock(1, false);
})();
