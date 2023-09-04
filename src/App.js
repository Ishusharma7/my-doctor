import Login from './Login Page/login'
import Header from './header/Header'
import Special from './Home Page/Cards/specialities';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Doctor from './Home Page/Cards/doctor';
import Footer from './footer/footer';
import Spdet from './Home Page/Cards/specdet';
import Doct from './Home Page/Cards/dcard';
function App() {
  return (
    <div className="App">
    <Router>
        <Header />
        <div className="space"></div>
        <Routes>
          <Route path="/" element={<Doctor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Specialities/search" element={<Spdet />} />
          <Route path="/search" element={<Spdet />} />
          <Route path="/" element={<Doctor />} />
          <Route path="/Specialities" element={<Special />} />
          <Route path="/doctors/:id" element={<Doct />} />
        </Routes>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
