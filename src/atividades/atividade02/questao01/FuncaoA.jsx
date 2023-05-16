import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"

import CorContexto from "./MeuContexto"

const FuncaoA = () => {

    const cores = {bkgA: "green", bkgB: "yellow", bkgC: "gray", bkgD:"red"}

    return (
         <CorContexto.Provider value={cores}>
            <h1 style={{ backgroundColor: cores.bkgA }}>funcao A</h1>
            <FuncaoB />
            <FuncaoC />
         </CorContexto.Provider>
    )
}

export default FuncaoA