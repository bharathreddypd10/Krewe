import FormHeader from "./components/Form Header/FormHeader";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Details from "./Pages/Tenant/Dashboard/Details/Details";
import useAuth from "./Custom Hooks/useAuth";
import TenantProfile from "./Pages/Tenant/Dashboard/Profile/TenantProfile";

const App = () => {
  const { isLoggedIn } = useAuth();
  return(
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/general/register/email/tenant" element={<FormHeader />} />
        <Route path="/general/login/email" element={<FormHeader />} />
        {
          isLoggedIn && (
            <>
              <Route path="/tenant/dashboard/details" element={<Details />} />
              <Route path='/tenant/dashboard/profile' element={<TenantProfile />} />
            </> 
          )
          
        }
        
        <Route path="/errorpage" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </Router>
  )
};

export default App;
