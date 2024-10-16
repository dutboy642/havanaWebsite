import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MailVerificationResult from "../pages/Auth/MailVerificationResult";
import Homepage from "../pages/Homepage";
import Layout from "../pages/Layouts";
import Set from "../pages/Set";
import All from "../pages/All";
import Stuff from "../pages/Stuff";
import Sale from "../pages/Sale";
import CheckOrderPage from "../pages/CheckOrder";
import LoginForm from "../pages/Login";
import RegisterForm from "../pages/Regist";
import Shirt from "../pages/Shirt";
import Trousers from "../pages/Trousers";
import Skirt from "../pages/Skirt";
import ProductDetail from "../pages/ProductDetail";
import AboutUs from "../pages/AboutUs";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Homepage />} />
          {/* <Route path='Home' element={<Homepage />} /> */}
          <Route path='Set' element={<Set />} />
          <Route path='Trousers' element={<Trousers />} />
          <Route path='Skirt' element={<Skirt />} />
          <Route path='Shirt' element={<Shirt />} />
          <Route path='All' element={<All />} />
          <Route path='Stuff' element={<Stuff />} />
          <Route path='Sale' element={<Sale />} />
          <Route path='CheckOrderPage' element={<CheckOrderPage />} />
          <Route path='LoginForm' element={<LoginForm />} />
          <Route path='RegistForm' element={<RegisterForm />} />
          <Route path='ProductDetail' element={<ProductDetail />} />
          <Route path='AboutUs' element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
