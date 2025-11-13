import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/CommonComponents/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Home } from "./Components/Home/Home";
import { Services } from "./Components/Services/Services";
import { AboutUs } from "./Components/AboutUs/AboutUs";
import { ContactUs } from "./Components/ContactUs/ContactUs";
import { Footer } from "./Components/CommonComponents/Footer/Footer";
import { Saftey } from "./Components/Saftey/Saftey";
import { ErectionStructural } from "./ErectionStructural/ErectionStructural";
import { CivilConcrete } from "./CivilConcrete/CivilConcrete";
import { UploadModal } from "./Components/UploadModal/UploadModal";
import { useState } from "react";
import { MyContext } from "./Store/Context";
import { ScrolltoTop } from "./Components/CommonComponents/ScrolltoTop";
import { Enginerring_n_Fabrication } from "./Enginerring-n-Fabrication/Enginerring-n-Fabrication";
import { CertifiedWelding } from "./CertifiedWelding/CertifiedWelding";
import { CallOutlined } from "@mui/icons-material";

function App() {
  const [openContact, setopenContact] = useState(false);

  const closeForm = () => {
    setopenContact((toogle) => !toogle);
  };
  return (
    <>
      <div>
        <a
          className="CallNowBtn"
          style={{ color: "black" }}
          href="tel:+718-233-6300"
        >
          {" "}
          <span className="CallIcon">
            {" "}
            <CallOutlined />
          </span>{" "}
          Call Now
        </a>
      </div>
      <ScrolltoTop />
      <MyContext.Provider
        value={{ currentValue: openContact, SetValue: closeForm }}
      >
        {openContact ? <UploadModal close={closeForm} /> : null}
        {/* <UploadModal/> */}
        <Header />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Saftey" element={<Saftey />} />
          <Route path="/ErectionStructural" element={<ErectionStructural />} />
          <Route path="/CivilConcrete" element={<CivilConcrete />} />
          <Route
            path="/Enginerring_n_Fabrication"
            element={<Enginerring_n_Fabrication />}
          />
          <Route path="/CertifiedWelding" element={<CertifiedWelding />} />
        </Routes>
        <Footer />
      </MyContext.Provider>
    </>
  );
}

export default App;
