declare function Zepto(selector: string) : any;
declare namespace Zepto{
    interface AjaxSettings {
        method?: 'GET' | 'POST'
        data?: any;
    }
    let $: (selector: string) => any;
    function ajax(url: string, settings?: AjaxSettings): void;
}

export {
    Zepto
};
