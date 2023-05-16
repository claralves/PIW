const Filho = ({altura,peso}) => {
    const calcularIMC = (altura,peso) => peso/(altura*altura)

    const renderizarMensagem = (imc) => {
        if(imc < 18) return <h3>Abaixo do peso</h3>
        else if(imc > 25) return <h3>Acima do peso</h3>
        return <h3>Peso ideal</h3>
    }

    const imc = calcularIMC(altura,peso)

    return (
        <div>
            <h1>IMC: {imc}</h1>
            {renderizarMensagem(imc)}
        </div>
    )
}

export default Filho