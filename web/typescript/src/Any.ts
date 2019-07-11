(() => {
    // 任意值的属性和方法
    let anyThing: any = 'Tom';
    anyThing.setName('Jerry');
    anyThing.setName('Jerry').sayHello();
    anyThing.myName.setFirstName('Cat');

    // 未声明类型的变量
    let something;
    something = 'seven';
    something = 7;
    something.setName('Tom');
})();
