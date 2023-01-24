import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro'
import Teste from './Pages/Teste'
import Feed from './Pages/Feed'

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Teste/>} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Cadastro' element={<Cadastro/>}/>
        <Route path='/Teste' element={<Teste/>} />
        <Route path='/Feed' element={<Feed/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
