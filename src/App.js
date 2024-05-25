import './App.css';
import Navbar from "./Components/NavBar"
import Home from "./Components/Home"
import About from "./Components/About"
import ContactUs from "./Components/ContactUs"
import DropDown from "./Components/DropDown"
import Portfolio from "./Components/Portfolio/Portfolio"
import Services from "./Components/Services"
import Footer from "./Components/Footer"
import Team from "./Components/Team"
import Technicalfeasibilityassessment from "./Components/Services/technical-feasibility-assessment"
import UIuxconsulting from "./Components/Services/ui-ux-consulting"
import Dataanalytics from "./Components/Services/data-analytics"
import Staffaugmentation from "./Components/Services/staff-augmentation"
import Softwarelegacymodernizationandmigration from "./Components/Services/software-legacy-modernization-and-migration"
import Qualityassurance from "./Components/Services/quality-assurance"
import Proofconceptofdevelopment from "./Components/Services/proof-concept-of-development"
import Fullstackwebdevelopment from "./Components/Services/full-stack-web-development"
import Cloudservices from "./Components/Services/cloud-services"
import Searchengineoptimization from "./Components/Services/search-engine-optimization"
import Digitalmarketingservices from "./Components/Services/digital-marketing-services"
import Socialmediamarketing from "./Components/Services/social-media-marketing"
import Emailmarketing from "./Components/Services/email-marketing"
import Contentdrivenmarketing from "./Components/Services/content-driven-marketing"
import Paidmarketing from "./Components/Services/paid-marketing"
import Facebookadsservices from "./Components/Services/facebook-ads-services"

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
   <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/dropdown" element={<DropDown/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/technical-feasibility-assessment" element={<Technicalfeasibilityassessment/>} />
          <Route path="/ui-ux-consulting" element={<UIuxconsulting/>} />
          <Route path="/data-analytics" element={<Dataanalytics/>} />
          <Route path="/staff-augmentation" element={<Staffaugmentation/>} />
          <Route path="/software-legacy-modernization-and-migration" element={<Softwarelegacymodernizationandmigration/>} />
          <Route path="/quality-assurance" element={<Qualityassurance/>} />
          <Route path="/proof-concept-of-development" element={<Proofconceptofdevelopment/>} />
          <Route path="/full-stack-web-development" element={<Fullstackwebdevelopment/>} />
          <Route path="/cloud-services" element={<Cloudservices/>} />
          <Route path="/search-engine-optimization" element={<Searchengineoptimization/>} />
          <Route path="/digital-marketing-services" element={<Digitalmarketingservices/>} />
          <Route path="/social-media-marketing" element={<Socialmediamarketing/>} />
          <Route path="/email-marketing" element={<Emailmarketing/>} />
          <Route path="/content-driven-marketing" element={<Contentdrivenmarketing/>} />
          <Route path="/paid-marketing" element={<Paidmarketing/>} />
          <Route path="/facebook-ads-services" element={<Facebookadsservices/>} />
      </Routes>
    </BrowserRouter>
    <Footer/>
   </>
  );
}

export default App;
