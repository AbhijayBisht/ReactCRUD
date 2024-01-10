import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/loginpage';
import Success from './pages/successpage';
import Crud from './pages/crudpage';

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/success' element={<Success />}/>
        <Route path='/success/crud' element={<Crud />}/>
      </Routes>
    </Router>
  );
}

export default App;
