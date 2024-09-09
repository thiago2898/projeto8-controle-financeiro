let initialQuantity = parseFloat(prompt('Qual a quantidade de dinheiro que você tem?'))
let information
let additionalQuantity
let subtractionalQuantity

do {
    information = prompt(`Quantidade de dinheiro disponível: R$${initialQuantity.toFixed(2)}

        1- Adicionar dinheiro
        2- Remover dinheiro
        3- Sair
            `)

    switch(information) {
    case '1':
        additionalQuantity = parseFloat(prompt('Qual a quantidade a ser adicionada?'))
        initialQuantity += additionalQuantity
        break
    case '2':
        subtractionalQuantity = parseFloat(prompt('Qual a quantidade a ser removida?'))
        initialQuantity -= subtractionalQuantity
        break
    }
} while (information !== '3')

if (information === '3') {
    alert('O programa foi encerrado.')
}

