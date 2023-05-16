import { useEffect, useState } from "react"
//uma compreende que a imagem esta sendo mudada e a outra realiza a mudança de true e false do botao

//melhor pokemon
const Diglett = () => {

    //inicializar com a imagem escolhida do melhor pokemon
    const [srcImage,setSrcImage] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png');
    const [flag, setFlag] = useState(false);

    //caso o botao tenha ou nao sido clicado, para mudar a imagem
    useEffect(
        () => {
            if (flag == false) {
                setSrcImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png`);

            }
            else {
                setSrcImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/50.png`);
            }
        }
        ,//analisa se ta td certim
        [flag]
    )

    return (
        //botao e imagem, prev servindo para armazenar o valor do botao, caso ja tenha sido ou nao selecionado
        <div>
            
            <h1>Qual é esse Pokémon???</h1>
            <img src={srcImage}
            alt="Pokemon"
            style={{width: "500px"}} />

            <button text onClick={() => setFlag((prev) => !prev)}>
                De costinha
            </button>

        </div>
    )
}

export default Diglett