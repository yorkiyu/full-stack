const pathToRegexp = require('path-to-regexp');

const rule = [
    {
        path: '/foo/:bar',
    },
    {
        path: '/foo/:bar/:name',
    },
    // {
    //     path: '/foo/:bar/?name=test',
    // },
    {
        path: '/foo/:bar?',
    },
    {
        path: '/foo/(\\:bar)',
    },
    {
        path: '/icon-:foo(\\d+).png'
    }
];

rule.forEach(v => {
    const keys = []
    const regexp = pathToRegexp(v.path, keys);
    // const parse = pathToRegexp.parse(v.path);
    console.log(v.path);
    console.log(regexp);
    // console.log(parse);
    console.log(keys);
    console.log('\n\n');
});
