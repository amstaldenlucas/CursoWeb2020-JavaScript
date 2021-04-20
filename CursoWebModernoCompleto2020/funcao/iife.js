// IIFE = Immediately Invoke Function Expression
// Esse ádrão é utilizado para fugir do escopo global. Basicamente define suas funções e variáveis dentro de ()

(function () { // cria a função anonoma delimitada por parênteses e depois imediatamente invoca a function
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()