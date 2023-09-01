import Login from './Login Page/login'
import Header from './header/Header'
import Special from './Home Page/Cards/specialities';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Doctor from './Home Page/Cards/doctor';
import Footer from './footer/footer';
function App() {
  return (
    <div className="App">
    <Router>
        <Header />
        <div className="space"></div>
        <Routes>
          <Route path="/" element={<Doctor />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/" element={<Doctor />} />
          <Route path="/Specialities" element={<Special />} />
        </Routes>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
