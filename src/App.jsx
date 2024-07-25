import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Carrousels from './components/Carrousels';
import Categorias from './components/Categorias';
import Produtos from './components/Produtos';
import { carroulselData } from './data/carroulselData'; 

// arrumar h3 da categoria produtos, margem tem que ser diferente em cada tela, exemplo: mobile tem que ser 24px auto

function App() {

  return (
    <>
      <NavBar />
      <Carrousels
        props={carroulselData}
      />
      <Categorias /> 
      <Produtos />
    </>
  )
}

export default App
