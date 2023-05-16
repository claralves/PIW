import React, { useState, useEffect } from "react"

//função para as informações das medias dos alunos

const Questao01X = () => {
    const [medias, setMedias] = useState([]);
    const [loading, setLoading] = useState(true);

const alunos = [
    { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } },
    { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
    { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } }
];

useEffect(() => {

    //calculo das medias por aluno
    const calcularMedias = () => {
        const medias = alunos.map((aluno) => {
            const mediaGeral = (aluno.notas.ap1 + aluno.notas.ap2) / 2;
            return mediaGeral.toFixed(1);
        });

        setMedias(medias);
        setLoading(false);

    };
    //realizar o calculo
    calcularMedias();

}, [alunos]);

//aqui deveria renderizar apenas os alunos que estao acima da media
const renderizarAlunos = () => {
    const MediaAcima = [];

        for (let i = 0; i < medias.length; i++) {
            if (medias[i] >= 6.0) {
                MediaAcima.push(<p key={i}>{alunos[i].nome}</p>);
            }
        }
        <h1>Os alunos com nota maior que 6 são: {renderizarAlunos()}</h1>

        return MediaAcima;
        

        <Questao01Y alunos = {alunos} setMedias = {setMedias}/>
  };
}

function Questao01Y() {
    return (
        <div>
           
        </div>
    )
}

export default Questao01X