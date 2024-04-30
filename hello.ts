import tag from 'vhtml';

const html = tag('div', { style: "color: red" }, [
    tag("p", {}, 'hello'),
    tag('br')
])

console.log(html)