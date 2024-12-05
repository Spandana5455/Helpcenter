import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HelpCenter from "./helpcenter";
import FAQsTroubleshooting from "./FAQsTroubleshooting";
import HCTroubleshooting from "./HCTroubleshooting";
import ContactOptions from "./ContactOptions"; 
import LegalDocs from "./LegalDocs";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HelpCenter />} />
        <Route path="/faqs" element={<FAQsTroubleshooting />} />
        <Route path="/hctroubleshooting" element={<HCTroubleshooting />} />
        <Route path="/contactoptions" element={<ContactOptions />} />
        <Route path="/legaldocs" element={<LegalDocs />} />
      </Routes>
    </Router>
  );
};

export default App;

