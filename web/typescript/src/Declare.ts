/**
 * 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能
 * @types
 * 我们可以直接下载下来使用，但是更推荐的是使用 @types 统一管理第三方库的声明文件
 */
import { Zepto } from '../types/Zepto';
(() => {
    // jQuery 使用了jQuery.d.ts 中的变量生明
    jQuery.$('#foo');
    let settings: jQuery.AjaxSettings = {
        method: 'POST',
        data: {
            name: 'foo'
        }
    };
    jQuery.ajax('/api/post_something', settings);

    // 类
    let cat = new Animal('Tom');
    cat.age = 12;
    cat.name = 'cat';

    Zepto('#id');
})();
