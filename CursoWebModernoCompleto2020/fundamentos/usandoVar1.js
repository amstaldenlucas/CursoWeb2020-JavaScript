{ { { { var sera = 'Será???' } } } }

console.log(sera) // O JS vai acessar a var mesmo que esteja fora de um bloco, ela estará visivel mesmo fora

function teste(){
    var local = 123
}

teste()
console.log(local) // Neste exemplo não vou conseguir acesar, ela está acessível somente dentro da função
                    // uma var que seja criada fora de uma função ela é global, está disponível dentro do
                    // objeto window. Ela é global