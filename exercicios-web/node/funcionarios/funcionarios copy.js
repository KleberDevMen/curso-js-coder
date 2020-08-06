const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'M'
const menorSalario = (funcionarioMenorSalario, funcionarioAtual) => {
    return funcionarioMenorSalario.salario < funcionarioAtual.salario ?
        funcionarioMenorSalario : funcionarioAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data

    // pegando chinesa com melhor salário
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})