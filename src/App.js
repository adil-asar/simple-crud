import './index.css'
import {Route, Routes } from 'react-router-dom' 
import Home from './Home';
import Read from './Read';
import Update from './Update';
import Post from './Post';

function App() {
  return (
    < >
    <Routes>
      <Route path='/' element={<Home/>} exact />
      <Route path='/post' element={ <Post/>} exact/>
      <Route path='/read' element={<Read/>} exact />update
      <Route path='/update' element={<Update />} exact  />
    </Routes> 
     
    </>
  );
}

export default App;
