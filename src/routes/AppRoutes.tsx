import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MailVerificationResult from "../pages/Auth/MailVerificationResult";
import Homepage from "../pages/Homepage";
import Layout from "../pages/Layouts";
import Shirt from "../pages/Shirt";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Homepage />} />
          {/* <Route path='Home' element={<Homepage />} /> */}
          <Route path='Shirt' element={<Shirt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
