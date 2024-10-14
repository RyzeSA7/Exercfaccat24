
// Função para encontrar o maior valor
function encontrarMaiorValor() {
    // Lendo os três valores
    let valor1 = parseFloat(prompt("Digite o primeiro valor:"))
    let valor2 = parseFloat(prompt("Digite o segundo valor:"))
    let valor3 = parseFloat(prompt("Digite o terceiro valor:"))

    // Inicializando a variável para o maior valor
    let maior;

    // Verificando qual é o maior valor
    if (valor1 > valor2) {
        if (valor1 > valor3) {
            maior = valor1 // valor1 é o maior
        } else {
            maior = valor3 // valor3 é o maior
        }
    } else {
        if (valor2 > valor3) {
            maior = valor2 // valor2 é o maior
        } else {
            maior = valor3 // valor3 é o maior
        }
    }

    // Exibindo o maior valor
    console.log(`O maior valor é: ${maior}`)
}

// Chamando a função
encontrarMaiorValor()