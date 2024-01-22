import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AdminDashboard from "./AdminDashboard";
import FraudDetection from "./FraudDetection";  // Adjust the path based on your project structure
import Login from "./Login";
import ULogin from "./ULogin";
import URegister from "./URegister.jsx";
import CreditCardDetection from "./CreditCardDetection"; // Adjust the path based on your project structure
import Userdetails from "./Userdetails";
import FirstPage from "./FirstPage";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Comment.jsx';
import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';
import Loureq from './Loureq';
import LouDocPage from './LouDocCom/LouDocpage';
import AnomalyDetection from "./AnomalyDetection";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/ulogin" element={<ULogin/>} />
        <Route path="/ureg" element={<URegister/>} />
        <Route path="/sidebar" element={<Sidebar/>} />
        <Route path="/transaction" element={<FraudDetection />} />
        <Route path="/fraud" element={<CreditCardDetection />} />
        <Route path="/userdetails" element={<Userdetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/proList" element={<ProductList />} />
          <Route path='/req' element={<Loureq/>}></Route>
        <Route path='/loudoc' element={<LouDocPage/>}></Route>
        <Route path="/anomoly" element={<AnomalyDetection />} />

        
        <Route path="/admin/*" element={<AdminDashboard />}>
          <Route index element={<h2>Welcome to Admin Dashboard</h2>} />
          <Route path="fraud-detection" element={<FraudDetection />} />
          <Route path="credit-card-detection" element={<CreditCardDetection />} />
        

        </Route>
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;