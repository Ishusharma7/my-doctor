import Login from './Login Page/login'
import Home from './Home Page/home'
import Header from './header/Header'
import Left from './Home Page/Cards/leftbar';
import Special from './Home Page/Cards/specialities';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router>
        <Header />
        <div className="space"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/" element={<Left />} />
          <Route path="/Specialities" element={<Special />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
