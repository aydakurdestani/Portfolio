import AboutMe from "./AboutMe";
import profileData from "./profileData";
import PerfectScrollbar from "react-perfect-scrollbar";

export default function App() {
  return (
    <PerfectScrollbar style={{ height: "100vh" }}>
      <div className="bg-light p-4">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <AboutMe profile={profileData} />
          </div>
        </div>
      </div>
    </PerfectScrollbar>
  );
}
