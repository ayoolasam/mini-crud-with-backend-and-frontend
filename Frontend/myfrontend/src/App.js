
import Home from './Pages/Home/Home';
import Add from './Pages/Add/Add'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Edit from './Pages/Edit/Edit'
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Nav/>
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/edit' element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
