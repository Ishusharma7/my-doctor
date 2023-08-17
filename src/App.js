import Login from './Login Page/login'
import Home from './Home Page/home'
import Header from './header/Header'
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
        </Routes>
    </Router>
    </div>
  );
}

export default App;
