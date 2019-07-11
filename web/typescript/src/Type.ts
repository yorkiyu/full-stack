/**
 * 类型别名
 * 类型别名用来给一个类型起个新名字
 * 使用 type 创建类型别名，类型别名常用于联合类型
 **/

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}
