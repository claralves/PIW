import React, { useEffect, useState } from "react";
//servem para renderizar a tela novamente

const Questao03 = () => {

    //para "ganchar" tanto a maior quanto a menor população
    const [maiorPop, setMaiorPop] = useState('');
    const [menorPop, setMenorPop] = useState('');

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/region/europe?fields=capital,population')
          .then((response) => response.json())
          .then((data) => {
            //variáveis de estado p/ menor e maior população
            let maiorIndex = 0;
            let menorIndex = 0;
    
            //
            for (let i = 1; i < data.length; i++) {
              if (data[i].population > data[maiorIndex].population) {
                maiorIndex = i;
              }
    
              if (data[i].population < data[menorIndex].population) {
                menorIndex = i;
              }
            }
    
            setMaiorPop(data[maiorIndex].capital[0]);
            setMenorPop(data[menorIndex].capital[0]);
          })
          .catch((error) => console.log(error));
      }, []);

        return (
            //só retornando o resultado visual

            <div>
                <h1>Países com maior população:</h1> 
                <h3>{maiorPop}!</h3> 
                <h1>Países com menor população:</h1>
                <h3>{menorPop}!</h3>
            </div>
        )
    }

    //nao estou conseguindo retornar mais de um país

export default Questao03;