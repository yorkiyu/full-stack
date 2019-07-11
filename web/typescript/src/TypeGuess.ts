(() => {
    // 类型推论
    let myFavoriteNumber = 'seven'; // 等价于let myFavoriteNumber: string = 'seven';
    myFavoriteNumber = 7;

    // 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
    let temp;
    temp = 'seven';
    temp = 7;
})();
