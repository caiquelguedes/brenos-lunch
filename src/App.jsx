
import './App.css'
import Cardapio from './Components/Cardapio/Cardapio'
import Comidas from './Components/Comidas/Comidas'
function App() {
  const comidas = [
    {nome:"teste", Preco: "0,00", descricao: " "},
    {nome:"teste2", Preco: "0,00", descricao: " "},
    {nome:"teste3", Preco: "0,00", descricao: " "}
  ]
  return (
    
      <div className="app">
        <Cardapio>
        
          <Comidas nome = "Em breve" descricao = " "  preco = "0800"/>
        
        </Cardapio>
        </div>
    
  )
}

export default App
