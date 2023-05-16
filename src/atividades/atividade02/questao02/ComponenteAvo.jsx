import PokemonContexto from "./MeuContexto"
import ComponentePai from "./ComponentePai"

const ComponenteAvo = () => {

    const number = 1

    return (
        <PokemonContexto.Provider>
            <div>
                <h1>Componente avo</h1>
                <img 
                    src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png'} 
                    style={{width: "400px"}} alt="" />
                    <ComponentePai />
            </div>
        </PokemonContexto.Provider>s
    )
}

export default ComponenteAvo