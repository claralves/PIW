import CorContexto from "./MeuContexto"

const FuncaoB = () => {
    return (
        <CorContexto.Consumer>
            {
                (cores) => {
                    return (
                        <div>
                            <h1 style={{ backgroundColor: cores.bkgB }}>
                                funcao B
                            </h1>
                        </div>
                    )
                }
            }
        </CorContexto.Consumer>

    )
}

export default FuncaoB