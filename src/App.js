import './App.css';
// import { Header,Body,Footer } from './component/04MultiploComponente';
// import { Supermercado, Legume, Fruta, Bebida } from './component/05Children';
// import * as PC from './atividades/atividade01/02MeuPC'
// import * as Batalha from './atividades/atividade01/03Batalha'
import FuncaoA from './component/06Contexto/FuncaoA';

function App() {
  return (
    // <div>
    //   <Header/>
    //   <Body/>
    //   <Footer/>
    // </div>

    // <div>
    //   <Supermercado nome="DoPovu">
    //     <Legume nome="Batata"/>
    //     <Fruta nome="Maça"/>
    //     <Bebida nome="Café"/>
    //   </Supermercado>
    // </div>

    // <div>
    //   <PC.PlacaDeVideo nome="RTX 3090" preco={10399.99} />
    //   <PC.PlacaMae nome="Gigabyte" preco={99999} />
    //   <PC.Memoria nome="Boa" preco={4000.99} />
    // </div>

    // <div>
    //   <Batalha.World>
    //     <Batalha.Arena nome="Castelão" />
    //     <Batalha.Arena nome="Castelinho" />

    //     <Batalha.Arena2 nome="Castelão" >
    //         <Batalha.Hero nome="Saiki Puto"/>
    //         <Batalha.Enemy nome="Sherekuto"/>
    //     </Batalha.Arena2>
    //   </Batalha.World>
    // </div>

    <FuncaoA />
  )
}

export default App;
