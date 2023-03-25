import './style.css';
import NavBar from './components/header/NavBar';
import ContainerCardItems from './components/component item/ContainerCardItems';
import { BrowserRouter , Route , Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<ContainerCardItems/>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
