/**
 *  元组
 *  数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象
 *
 **/

 (() => {
     let xcatliu: [string, number] = ['Xcat Liu', 25];

    xcatliu[0] = 'Xcat Liu';
    xcatliu[1] = 25;

    xcatliu[0].slice(1);
    xcatliu[1].toFixed(2);

    // 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型
    xcatliu.push('list');
    xcatliu.push('list');
    xcatliu.push(34);
    xcatliu.push(false); // 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型

    console.log(xcatliu);
 })();
