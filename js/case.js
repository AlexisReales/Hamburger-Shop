const verificarProduto = function(opcao){
    let resultado = "<br><h3>Opção selecionada</h3>"

    switch (opcao) {
        case 'hb1':
            resultado += 'Hamburguer Simples está com preço de R$10,10'
            console.log('Hamburguer Simples está com preço de R$10,10')
            break

        case 'hb2':
            resultado += 'Hamburguer Duplo está com preço de R$20,10'
            console.log('Hamburguer Duplo está com preço de R$20,10')
            break

        case 'hb3':
            resultado += 'Hamburguer Bacon está com preço de R$15,50'
            console.log('Hamburguer Bacon está com preço de R$15,50')
            break

        case 'hb4':
            resultado += 'Hamburguer Bacon Duplo está com preço de R$27,20'
            console.log('Hamburguer Bacon Duplo está com preço de R$27,20')
            break

        default:
            resultado += 'Opção inválida'
            console.log('Opção inválida')
            break
    }
    document.getElementById('resultado').innerHTML = resultado
}