import Login from './Login Page/login'
import Header from './header/Header'
import Special from './Home Page/Cards/specialities';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Doctor from './Home Page/Cards/doctor';
import Footer from './footer/footer';
import Spdet from './Home Page/Cards/specdet';
import Dodet from './Home Page/Cards/docotdet';
import Profile from './loggedin/logedincomponents/Profile';
import ChPassword from './loggedin/logedincomponents/Password';
import Payment from './loggedin/logedincomponents/Payment';
function App() {
  return (
    <div className="App">
    <Router>
        <Header />
        <div className="space"></div>
        <Routes>
          <Route path="/" element={<Doctor />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/Specialities/search" element={<Spdet />} />
          <Route path="/search" element={<Spdet />} />
          <Route path="/" element={<Doctor />} />
          <Route path="/Specialities" element={<Special />} />
          <Route path="/doctors/:id" element={<Dodet />} />
          <Route path="/myprofile" element={<Profile />} />
          <Route path="/changepassword" element={<ChPassword />} />
          <Route path="/appointments" element={<Payment />} />
        </Routes>
    </Router>
    <Footer />
    
    </div>
  );
}

export default App;
