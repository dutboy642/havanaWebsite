import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import MailVerificationResult from "../pages/Auth/MailVerificationResult";
import Homepage from "../pages/Homepage";
import Layout from "../pages/Layouts";
import Set from "../pages/Set";
import All from "../pages/All";
import Sale from "../pages/Sale";
import CheckOrderPage from "../pages/CheckOrder";
import LoginForm from "../pages/Login";
import RegisterForm from "../pages/Regist";
import Shirt from "../pages/Shirt";
import Trousers from "../pages/Trousers";
import Skirt from "../pages/Skirt";
// import ProductDetail from "../pages/ProductDetail";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/Contact";
import CustomerSupport from "../pages/Support";
import ProductPage from "../pages/ProductPage";
import { ToastProvider } from "../components/CustomToast";
import { AuthProvider, useAuth } from "../components/AuthContext";
import Checkout from "../pages/Checkout";
import { ProductProvider } from "../components/ProductContext";
import Cart from "../pages/Cart";
const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to="/" /> : element;
};

export const AppRouter = () => {
  return (
    <AuthProvider>
      <ToastProvider>
        <ProductProvider>
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
                <Route path='Sale' element={<Sale />} />
                <Route path='CheckOrderPage' element={<CheckOrderPage />} />
                <Route path='Cart' element={<Cart />} />
                <Route
                  path="LoginForm"
                  element={<ProtectedRoute element={<LoginForm />} />}
                />
                <Route
                  path="RegistForm"
                  element={<ProtectedRoute element={<RegisterForm />} />}
                />
                <Route path='ProductDetail' element={<ProductPage />} />
                <Route path='AboutUs' element={<AboutUs />} />
                <Route path='ContactUs' element={<ContactUs />} />
                <Route path='Support' element={<CustomerSupport />} />
              </Route>
              <Route path='Checkout' element={<Checkout />} />
            </Routes>
          </BrowserRouter>
        </ProductProvider>
      </ToastProvider>
    </AuthProvider>

  );
};
