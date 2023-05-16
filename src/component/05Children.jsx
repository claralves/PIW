//V0
// const Supermercado = ({children,nome}) => {
//     return (
//         <div>
//             <h1>Supermercado {nome}</h1>
//             {children}
//         </div>
//     )
// }

//V1
// const Supermercado = ({ children, nome }) => {
//     return (
//         <div>
//             <h1>Supermercado {nome}</h1>
//             {
//                 Children.map(
//                     children,
//                     filho =>
//                         <div style={{ backgroundColor: "purple" }}>
//                             {filho}
//                         </div>
//                 )
//             }
//         </div>
//     )
// }

//V2

import { cloneElement } from "react"

import { Children } from "react"

const Supermercado = ({ children, nome }) => {
    return (
        <div>
            <h1>Supermercado {nome}</h1>
            {
                Children.map(
                    children,
                    filho =>
                        cloneElement(filho,{supermercado:nome})
                )
            }
        </div>
    )
}

const Legume = ({ nome, supermercado }) =>
    <div>
        <h3>Legume {nome} do Supermercado {supermercado}</h3>
    </div>

const Fruta = ({ nome }) =>
    <div>
        <h3>Fruta {nome}</h3>
    </div>

const Bebida = ({ nome }) =>
    <div>
        <h3>Bebida {nome}</h3>
    </div>

export { Supermercado, Legume, Fruta, Bebida }