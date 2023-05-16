const Calculadora = () => {
    const somar = (x,y) => {
        return x+y
    }

    const subtrair = (x,y) => x - y

    function multiplicar(x,y) {
        return x*y
    }

    const dividir = (x,y) => x/y

    const chamarDivisao = (divisao) => {
        return divisao(30,5)
    }

    return (
        <div>
            <h1>O resultado é: {somar(2,3)} </h1>
            <h1>O resultado da subtração é: {subtrair(3,1)}</h1>
            <h1>O resultado da multiplicação é: {multiplicar(3,2)}</h1>
            <h1>O resultado da divisao é: {chamarDivisao(dividir)}</h1>
        </div>
    )
}

export default Calculadora