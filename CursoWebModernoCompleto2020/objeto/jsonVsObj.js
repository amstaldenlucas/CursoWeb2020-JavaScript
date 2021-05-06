const obj = {a: 1, b: 2, c: 3, soma(){return a + b + c} }
console.log(JSON.stringify(obj)) // objeto para JSON

//console.log(JSON.parse("{ a: 1, b: 2, c:3}"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}')) // JSON para objeto
console.log(JSON.parse('{ "a": 1.7, "b": "minhaString", "c": true, "d": {}, "e": []}'))