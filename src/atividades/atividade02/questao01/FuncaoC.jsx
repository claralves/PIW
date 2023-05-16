import CorContexto from "./MeuContexto"
import { useContext } from "react"
import FuncaoD from "./FuncaoD"

const FuncaoC = () => {
    const cores = useContext(CorContexto)

    return (
        <div>
            <h1 style={{ backgroundColor: cores.bkgC }}>funcao C</h1>
            <FuncaoD/>
        </div>
    )
}

export default FuncaoC