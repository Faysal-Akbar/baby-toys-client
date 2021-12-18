import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Login from './Login/Login/Login';
import Register from './Login/Register/Register';
import AllProducts from './Pages/AllProducts/AllProducts';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageOrders from './Pages/Dashboard/ManageOrders/ManageOrders';
import ManageProduct from './Pages/Dashboard/ManageProduct/ManageProduct';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Review from './Pages/Dashboard/Review/Review';
import Home from './Pages/Home/Home/Home';
import SingleDetail from './Pages/SingleDetail/SingleDetail';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/allProducts" element={<AllProducts/>}></Route>
          <Route path="/singleDetail/:_id" element={<PrivateRoute><SingleDetail/></PrivateRoute>}>
          </Route>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
            <Route path="/dashboard/myOrders" element={<MyOrders></MyOrders>}>
            </Route>
            <Route path="/dashboard" element={<MyOrders></MyOrders>}>
            </Route>
            <Route path="/dashboard/review" element={<Review></Review>}>
            </Route>
            <Route path="/dashboard/addProduct" element={<AddProduct></AddProduct>}>
            </Route>
            <Route path="/dashboard/manageProduct" element={<ManageProduct></ManageProduct>}>
            </Route>
            <Route path="/dashboard/manageOrders" element={<ManageOrders></ManageOrders>}>
            </Route>
            <Route path="/dashboard/makeAdmin" element={<MakeAdmin></MakeAdmin>}>
            </Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
