
import './App.css'
import Cardapio from './Components/Cardapio/Cardapio'
import Comidas from './Components/Comidas/Comidas'
function App() {
  const comidas = [
    {nome:"teste", Preco: "0,00", descricao: " a"},
    {nome:"teste2", Preco: "0,00", descricao: " b"},
    {nome:"teste3", Preco: "0,00", descricao: " c"},
    {nome:"teste2", Preco: "0,00", descricao: " b"},
    {nome:"teste2", Preco: "0,00", descricao: " b"},
    {nome:"teste2", Preco: "0,00", descricao: " b"},
    {nome:"teste2", Preco: "0,00", descricao: " b"},
    {nome:"teste2", Preco: "0,00", descricao: " b"},
    {nome:"teste2", Preco: "0,00", descricao: " b"},
    {nome:"teste2", Preco: "0,00", descricao: " b"}
  ]
  return (
    
      <div className="app">
        <h1>Cardápio</h1>
        <Cardapio nome="menu"> 
        {
          comidas.map(comida=>{
            return (
                <Comidas nome= {comida.nome} descricao = {comida.descricao}  preco = {comida.preco}/>
              ) 
            }
          )
        }
        </Cardapio>
        </div>
    
  )
}

export default App
