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
          <Route path='Home' element={<Homepage />} />
          <Route path='Shirt' element={<Shirt />} />
        </Route>
        {/* <Route path="/auth" element={<Auth />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/bookinghotel" element={<BookingHotel />} />
        <Route path="/bookcombo" element={<BookCombo />} />
        <Route path="/detailtour" element={<DetailTour />} />
        <Route path="/bookTicket" element={<BookTickets />} />
        <Route path="/Chuyen-Di" element={<ChuyenDi />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/Home/" element={<Layout />}>
          <Route path="news" element={<News />} />
          <Route path="Intro" element={<Intro />} />
        </Route>
        <Route path="/Setting/" element={<Setting />}>
          <Route index element={<PersonalInformationSetting />} />
          <Route path="Options" element={<OptionsSetting />} />
          <Route path="Safety" element={<Safety />} />
          <Route path="Billing" element={<BillingSetting />} />
          <Route path="Privacy" element={<PrivacySetting />} />
          <Route path="Email" element={<EmailSetting />} />
          <Route path="Companion" element={<CompanionSetting />} />
        </Route>
         <Route path="/Admin/" element={<AdminLayout />}>
                    <Route path='Dashboard' element={<AdminDashboard />} />
                    <Route path='ManageHotel' element={<ManageHotel />} />
                    <Route path='ManageTicket' element={<ManageTicket />} />
                </Route> */}
      </Routes>
    </BrowserRouter>
  );
};
