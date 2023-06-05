import Home from "./pages/Home";
import{ Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import ForgotPassword from "./pages/ForgotPassword";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/offers" element={<Offers/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
        </Routes>
    </Router>
  )
}

export default App;
