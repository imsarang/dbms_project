import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import CreateCompany from './components/CreateCompany';
import Profile from './components/Profile';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/create' element={<CreateCompany/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
