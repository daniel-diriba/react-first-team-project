import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Pages from "./components/Pages";
import Faq from "./components/Faq";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import Models from "./components/Models";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import "./css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}>
          <Route path="models" element={<Models />} />
        </Route>

        <Route path="/pages" element={<Pages />} />
        <Route path="/models" element={<Models />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
