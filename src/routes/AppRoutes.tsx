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
// import CustomerSupport from "../pages/Support";
import CustomerInstruct from "../pages/CustomerInstruc";
import ProductPage from "../pages/ProductPage";
import { ToastProvider } from "../components/CustomToast";
import { AuthProvider, useAuth } from "../components/AuthContext";
import Checkout from "../pages/Checkout";
import { ProductProvider } from "../components/ProductContext";
import Cart from "../pages/Cart";
import SearchResults from "../pages/SearchResults";
import ScrollToTop from "../components/ScrollToTop";
import ArticlesGrid from "../pages/Articles";
import BlackFriday from "../pages/Articles/BlackFriday";
import FashionTrends from "../pages/Articles/FashionTrend";
import FashionGuide from "../pages/Articles/FashionGuide";
import OrderComplete from "../pages/OrderComplete";
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
            <ScrollToTop />
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
                <Route path='Articles' element={<ArticlesGrid />} />
                <Route path="BlackFriday" element={<BlackFriday />} />
                <Route path="FashionTrend" element={<FashionTrends />} />
                <Route path="FashionGuide" element={<FashionGuide />} />
                <Route path="OrderComplete" element={<OrderComplete />} />

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
                <Route path='Support' element={<CustomerInstruct />} />
                <Route path='SearchResults' element={<SearchResults />} />
              </Route>
              <Route path='Checkout' element={<Checkout />} />
            </Routes>
          </BrowserRouter>
        </ProductProvider>
      </ToastProvider>
    </AuthProvider>

  );
};
