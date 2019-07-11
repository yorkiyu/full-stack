/**
 * namespace 是 ts 早期时为了解决模块化而创造的关键字，中文称为命名空间
 * namespace 被淘汰了，但是在声明文件中，declare namespace 还是比较常用的，它用来表示全局变量是一个对象，包含很多子属性
 **/
// 声明合并
declare function jQuery(selector: string) : any;
declare namespace jQuery {
    interface AjaxSettings {
        method?: 'GET' | 'POST'
        data?: any;
    }
    let $: (selector: string) => any;
    function ajax(url: string, settings?: AjaxSettings): void;
}
