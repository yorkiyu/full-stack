(() => {
    // Boolean
    let isDone: boolean = false;
    console.log(isDone);

    // Number
    let decLiteral: number = 6;
    let hexLiteral: number = 0xf00d;
    // ES6 中的二进制表示法
    let binaryLiteral: number = 0b1010;
    // ES6 中的八进制表示法
    let octalLiteral: number = 0o744;
    let notANumber: number = NaN;
    let infinityNumber: number = Infinity;
    console.log(decLiteral);

    // string
    let myName: string = 'Tom';
    let myAge: number = 25;
    let sentence: string = `Hello, my name is ${myName}.
    I'll be ${myAge + 1} years old next month.`;
    console.log(sentence);

    // void
    function alertName(): void {
        alert('My name is Tom');
    }

    // null 和 undefined
    let u: undefined = undefined;
    let n: null = null;
    let num: number = undefined;
    let num2: number = null;
})();
