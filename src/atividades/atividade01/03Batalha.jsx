import {Children, cloneElement} from 'react'

const Hero = ({nome, arena}) => {
    return (
        <div>
            <h1>Sou o herói. Meu nome é: {nome}, estou na Arena {arena}</h1>
            <img 
                src="https://i.pinimg.com/originals/fd/bc/46/fdbc466dfb686dba481393a60b5e5f0b.jpg" 
                alt="O maior héroi"
                style={{width: "240px"}} 
            />
        </div>
    )
}
const Enemy = ({nome}) => {
    return (
        <div>
            <h1>Sou o inimigo. Meu nome é: {nome}</h1>
            <img 
                src="data:image/jpeg;base64,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" 
                alt="O maior vilao"
                style={{width: "240px"}} 
            />
        </div>
    )
}

const Arena = ({nome}) => {
    return (
        <div>
            <h1>Arena: {nome}</h1>
            <Hero nome="Saiki Kusuo"/>
            <Enemy nome="Sheruto"/>
        </div>
    )
}

const Arena2 = ({nome, children}) => {
    return (
        <div>
            <h1>Arena: {nome}</h1>
            {
                Children.map(
                    children,
                    (child) => {
                        return cloneElement(child,{arena:nome})
                    }
                )
            }
        </div>
    )
}

const World = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export {Hero, Enemy, Arena, Arena2, World}