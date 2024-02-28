
import './App.css';
import Assessment from './Components/Assesment';
import Dashboard from './Components/Dashboard';
import Library from './Components/Library';
import { createContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
const data = [

  {
    "Assessment Run ID": "AR-876891",
    "Risk ID": "RS-8306432",
    "Risk Scenario": "Confidentiality of system ABC is compromised.",
    "Likelihood Score Text": "Always",
    "Likelihood Score Value": 5,
    "Business Impact Score Text": "Low",
    "Business Impact Score Value": 2,
    "Net Risk Score": 2,
    "Date Submitted": "12-03-2023"
  },
  {
    "Assessment Run ID": "AR-876891",
    "Risk ID": "RS-8306433",
    "Risk Scenario": "Integrity of data stored in system ABC is compromised.",
    "Likelihood Score Text": "Frequent",
    "Likelihood Score Value": 3,
    "Business Impact Score Text": "Very Low",
    "Business Impact Score Value": 1,
    "Net Risk Score": 0.6,
    "Date Submitted": "12-03-2023"
  },
  {
    "Assessment Run ID": "AR-876891",
    "Risk ID": "RS-8306434",
    "Risk Scenario": "System ABC is operationally unavailable for an extended time period.",
    "Likelihood Score Text": "Periodic",
    "Likelihood Score Value": 2,
    "Business Impact Score Text": "Critical",
    "Business Impact Score Value": 5,
    "Net Risk Score": 2,
    "Date Submitted": "12-03-2023"
  },
  {
    "Assessment Run ID": "AR-876891",
    "Risk ID": "RS-8306435",
    "Risk Scenario": "Confidentiality of system XYZ is compromised.",
    "Likelihood Score Text": "Often",
    "Likelihood Score Value": 4,
    "Business Impact Score Text": "High",
    "Business Impact Score Value": 4,
    "Net Risk Score": 3.2,
    "Date Submitted": "12-03-2023"
  },
  {
    "Assessment Run ID": "AR-876891",
    "Risk ID": "RS-8306436",
    "Risk Scenario": "Integrity of data stored in system XYZ is compromised.",
    "Likelihood Score Text": "Always",
    "Likelihood Score Value": 5,
    "Business Impact Score Text": "Medium",
    "Business Impact Score Value": 3,
    "Net Risk Score": 3,
    "Date Submitted": "12-03-2023"
  },
  {
    "Assessment Run ID": "AR-876891",
    "Risk ID": "RS-8306437",
    "Risk Scenario": "System XYZ is operationally unavailable for an extended time period.",
    "Likelihood Score Text": "Rare",
    "Likelihood Score Value": 1,
    "Business Impact Score Text": "Low",
    "Business Impact Score Value": 2,
    "Net Risk Score": 0.4,
    "Date Submitted": "12-03-2023"
  },
  {
    "Assessment Run ID": "AR-876891",
    "Risk ID": "RS-8306438",
    "Risk Scenario": "Confidentiality of system KLM is compromised.",
    "Likelihood Score Text": "Often",
    "Likelihood Score Value": 4,
    "Business Impact Score Text": "High",
    "Business Impact Score Value": 4,
    "Net Risk Score": 3.2,
    "Date Submitted": "12-03-2023"
  },
  {
    "Assessment Run ID": "AR-876891",
    "Risk ID": "RS-8306439",
    "Risk Scenario": "Integrity of data stored in system KLM is compromised.",
    "Likelihood Score Text": "Frequent",
    "Likelihood Score Value": 3,
    "Business Impact Score Text": "Critical",
    "Business Impact Score Value": 5,
    "Net Risk Score": 3,
    "Date Submitted": "12-03-2023"
  },
  {
    "Assessment Run ID": "AR-876891",
    "Risk ID": "RS-8306440",
    "Risk Scenario": "System KLM is operationally unavailable for an extended time period.",
    "Likelihood Score Text": "Periodic",
    "Likelihood Score Value": 2,
    "Business Impact Score Text": "Very Low",
    "Business Impact Score Value": 1,
    "Net Risk Score": 0.4,
    "Date Submitted": "12-03-2023"
  },
  {
    "Assessment Run ID": "AR-876892",
    "Risk ID": "RS-8306432",
    "Risk Scenario": "Confidentiality of system ABC is compromised.",
    "Likelihood Score Text": "Often",
    "Likelihood Score Value": 4,
    "Business Impact Score Text": "Medium",
    "Business Impact Score Value": 3,
    "Net Risk Score": 2.4,
    "Date Submitted": "24/08/23"
  },
  {
    "Assessment Run ID": "AR-876892",
    "Risk ID": "RS-8306433",
    "Risk Scenario": "Integrity of data stored in system ABC is compromised.",
    "Likelihood Score Text": "Always",
    "Likelihood Score Value": 5,
    "Business Impact Score Text": "Low",
    "Business Impact Score Value": 2,
    "Net Risk Score": 2,
    "Date Submitted": "24/08/23"
  },
  {
    "Assessment Run ID": "AR-876892",
    "Risk ID": "RS-8306434",
    "Risk Scenario": "System ABC is operationally unavailable for an extended time period.",
    "Likelihood Score Text": "Often",
    "Likelihood Score Value": 4,
    "Business Impact Score Text": "High",
    "Business Impact Score Value": 4,
    "Net Risk Score": 3.2,
    "Date Submitted": "24/08/23"
  },
  {
    "Assessment Run ID": "AR-876892",
    "Risk ID": "RS-8306435",
    "Risk Scenario": "Confidentiality of system XYZ is compromised.",
    "Likelihood Score Text": "Often",
    "Likelihood Score Value": 4,
    "Business Impact Score Text": "Critical",
    "Business Impact Score Value": 5,
    "Net Risk Score": 4,
    "Date Submitted": "24/08/23"
  },
  {
    "Assessment Run ID": "AR-876892",
    "Risk ID": "RS-8306436",
    "Risk Scenario": "Integrity of data stored in system XYZ is compromised.",
    "Likelihood Score Text": "Frequent",
    "Likelihood Score Value": 3,
    "Business Impact Score Text": "Very Low",
    "Business Impact Score Value": 1,
    "Net Risk Score": 0.6,
    "Date Submitted": "24/08/23"
  },
  {
    "Assessment Run ID": "AR-876892",
    "Risk ID": "RS-8306437",
    "Risk Scenario": "System XYZ is operationally unavailable for an extended time period.",
    "Likelihood Score Text": "Periodic",
    "Likelihood Score Value": 2,
    "Business Impact Score Text": "Very Low",
    "Business Impact Score Value": 1,
    "Net Risk Score": 0.4,
    "Date Submitted": "24/08/23"
  },
  {
    "Assessment Run ID": "AR-876892",
    "Risk ID": "RS-8306438",
    "Risk Scenario": "Confidentiality of system KLM is compromised.",
    "Likelihood Score Text": "Always",
    "Likelihood Score Value": 5,
    "Business Impact Score Text": "Critical",
    "Business Impact Score Value": 5,
    "Net Risk Score": 5,
    "Date Submitted": "24/08/23"
  },
  {
    "Assessment Run ID": "AR-876892",
    "Risk ID": "RS-8306439",
    "Risk Scenario": "Integrity of data stored in system KLM is compromised.",
    "Likelihood Score Text": "Rare",
    "Likelihood Score Value": 1,
    "Business Impact Score Text": "High",
    "Business Impact Score Value": 4,
    "Net Risk Score": 0.8,
    "Date Submitted": "24/08/23"
  },
  {
    "Assessment Run ID": "AR-876892",
    "Risk ID": "RS-8306440",
    "Risk Scenario": "System KLM is operationally unavailable for an extended time period.",
    "Likelihood Score Text": "Often",
    "Likelihood Score Value": 4,
    "Business Impact Score Text": "Medium",
    "Business Impact Score Value": 3,
    "Net Risk Score": 2.4,
    "Date Submitted": "24/08/23"
  }

]
export const MyContext = createContext("");
function App() {
 
  return (
    <BrowserRouter>
   
  
    <MyContext.Provider value={{data:data}}>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Dashboard />}/>
      <Route path="library" element={<Library />} />
        <Route path="assessment" element={<Assessment />} />
    </Routes>
    </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
