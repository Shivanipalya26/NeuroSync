import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RootStructure from "./styles/template/RootStructure";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import LoginPage from "./pages/Login";
import ComingSoon from "./pages/Soon";

function App() {
  return (
    <Router>
      <RootStructure>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/soon" element={<ComingSoon />} />
        </Routes>
      </RootStructure>
    </Router>
  );
}

export default App;
