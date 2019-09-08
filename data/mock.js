const Mockjs = require("mockjs");
const Random = Mockjs.Random;


let data = Mockjs.mock({
    'list|10-20': [{
        "id|+1": 0,
        "name": "@name",
        "title|": "@ctitle",
        "cword": "@cword(20)",
        "price|10-50.2": 200,
        "date": "@date()",
        "state|0": 1,
        "ip": "@ip",
        "url": "@url",
        'pic': '@image(140x140)',
        "count": 1,
        "，": true
    }]
});
console.log(data, 'data-----1')
export default data