import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MailVerificationResult from "../pages/Auth/MailVerificationResult";
import Homepage from "../pages/Homepage";
import Layout from "../pages/Layouts";
import Shirt from "../pages/Shirt";
import TShirt from "../pages/TShirt";
import GeneralShirt from "../pages/GeneralShirt";
import Hoodie from "../pages/Hoodie";
import LongTrousers from "../pages/LongTrousers";
import NewProduct from "../pages/NewProduct";
import ShortTrousers from "../pages/ShortTrousers";
import Sweater from "../pages/Sweater";
import SweaterAndHoodie from "../pages/SweaterAndHoodie";
import Trousers from "../pages/Trousers";
import All from "../pages/All";
import Stuff from "../pages/Stuff";
import Sale from "../pages/Sale";
import CheckOrderPage from "../pages/CheckOrder";
import LoginForm from "../pages/Login";
import RegisterForm from "../pages/Regist";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Homepage />} />
          {/* <Route path='Home' element={<Homepage />} /> */}
          <Route path='Shirt' element={<Shirt />} />
          <Route path='TShirt' element={<TShirt />} />
          <Route path='GeneralShirt' element={<GeneralShirt />} />
          <Route path='Hoodie' element={<Hoodie />} />
          <Route path='LongTrousers' element={<LongTrousers />} />
          <Route path='NewProduct' element={<NewProduct />} />
          <Route path='ShortTrousers' element={<ShortTrousers />} />
          <Route path='Sweater' element={<Sweater />} />
          <Route path='SweaterAndHoodie' element={<SweaterAndHoodie />} />
          <Route path='Trousers' element={<Trousers />} />
          <Route path='All' element={<All />} />
          <Route path='Stuff' element={<Stuff />} />
          <Route path='Sale' element={<Sale />} />
          <Route path='CheckOrderPage' element={<CheckOrderPage />} />
          <Route path='LoginForm' element={<LoginForm />} />
          <Route path='RegistForm' element={<RegisterForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
