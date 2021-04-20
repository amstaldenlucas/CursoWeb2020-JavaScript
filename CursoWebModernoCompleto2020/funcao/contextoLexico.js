const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

// A funcao carrega o contexto de onde ela foi declarda. Por isso temos que tomar cuidado
// com os parâmetro que ela irá manipular
exec()