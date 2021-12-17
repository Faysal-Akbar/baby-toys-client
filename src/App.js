import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login/Login/Login';
import AllProducts from './Pages/AllProducts/AllProducts';
import Home from './Pages/Home/Home/Home';
import SingleDetail from './Pages/SingleDetail/SingleDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/allProducts" element={<AllProducts/>}></Route>
          <Route path="/singleDetail/:_id" element={<SingleDetail/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
