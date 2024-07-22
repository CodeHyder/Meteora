import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Carrousels from './components/Carrousels';
import Categorias from './components/Categorias';
import { carroulselData } from './data/carroulselData';

function App() {

  return (
    <>
      <NavBar />
      <Carrousels
        props={carroulselData}
      />
      <Categorias />
    </>
  )
}

export default App
