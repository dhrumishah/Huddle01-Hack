import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import DashBoard from "./components/DashBoard";
import styles from "./style";
import InitPage from "./components/InitPage";
import Team from "./components/Team";
import DoctorDetails from "./components/DoctorDetails";
import MyProfile from "./components/MyProfile";

export default function App() {
  return (
    <div className="bg-[#10213B] w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>
      <div className={`bg-primary h-screen ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path="/" element={<Navigate to="/auth" />} />
            <Route path="/auth" element={<InitPage />} />
            <Route path="/home" element={<DashBoard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/doc/:docId" element={<DoctorDetails />} />
            <Route path="/updateprofile" element={<MyProfile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
