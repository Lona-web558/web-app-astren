import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Explore } from "./pages/explore";
import { Rise } from "./pages/rise";

import { Signup } from "./pages/signup";
import { Login } from "./pages/login";

import { Chat } from "./pages/chat";
import { Cart } from "./pages/cart";
import { Profile } from "./pages/profile";
import { Notification } from "./pages/notification";
import { SellerLocation } from "./pages/sellerRegistration/sellerLocation";
import { BusinessInfo } from "./pages/sellerRegistration/businessInfo";
import { BankDetails } from "./pages/sellerRegistration/bankDetails";
import {app} from "./firebaseConfig";

function App() {
  return (
    <div className="w-screen min-h-screen bg-[#16002E]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rise" element={<Rise />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/sellerLocation" element={<SellerLocation />} />
          <Route path="/businessInfo" element={<BusinessInfo />} />
          <Route path="/bankDetails" element={<BankDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}




export default App;
