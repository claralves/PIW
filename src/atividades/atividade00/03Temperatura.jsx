const Temperatura = () => {
    const celsiusParaFahrenheit = (c) => {
        let x = c * 9
        let f = null
        let y = 5 * 32
        f = (x + y)/5

        return f
    }
    const fahrenheitParaCelsius = (f) => {
        let x = f - 32
        let y = x * 5
        let c = y / 9

        return c
    }
    const kelvin = (k) => {
        let c = k - 273
        let f = 9 * k - 2425

        return c, f
    }
    return (
        <div>
            <h1> Eu to com {celsiusParaFahrenheit(40)} de fahrenheits</h1>
            <h1>Eu to com {fahrenheitParaCelsius(104)} de celsius</h1>
            <h1>Eu to com {kelvin(303)}</h1>
        </div>
    )
}

export default Temperatura