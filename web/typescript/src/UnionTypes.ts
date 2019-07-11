(() => {
    // 联合类型，可以为string或number
    let myFavoriteNumber: string | number;
    myFavoriteNumber = 'seven';
    myFavoriteNumber = 7;

    // 函数参数
    function getString(something: string | number): string {
        return something.toString();
    }
})();
