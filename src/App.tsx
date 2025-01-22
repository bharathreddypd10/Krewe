import FormHeader from "./components/Form Header/FormHeader";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";

const App = () => {
  return(
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/general/register/email/tenant" element={<FormHeader />} />
        <Route path="/general/login/email" element={<FormHeader />} />
      </Routes>
    </Router>
  )
};

export default App;
