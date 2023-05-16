import CorContexto from "./MeuContexto"

const FuncaoD = () => {
    return (
        <CorContexto.Consumer>
            {
                (cores) => {
                    return (
                        <div>
                            <h1 style={{ backgroundColor: cores.bkgD }}>funcao D</h1>
                        </div>
                    )
                }
            }
        </CorContexto.Consumer>

    )
}

export default FuncaoD