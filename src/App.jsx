import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Navbar from "./components/Navbar.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import { useFirebase } from "./context/Firebase.jsx";


export default function App() {
  const {isLoggedIn} = useFirebase();

  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="tech-hired.vercel.app/signup" element={isLoggedIn ? <AdminDashboard/> : <SignupPage/>}/>
          <Route path="tech-hired.vercel.app/login" element={isLoggedIn ? <AdminDashboard/> : <LoginPage/>}/>
          <Route path="tech-hired.vercel.app/admin-dashboard" element={isLoggedIn ? <AdminDashboard/> : <LoginPage/>}/>
        </Routes>
      </div>
  );
}
