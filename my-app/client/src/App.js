import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ClassRoom from "./pages/Classroom";
import ContactForm from "./pages/ContactForm";
import Profile from "./pages/Profile";
import KidProfile from "./pages/Kidprofile";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Navigation />
        <Container style={{ paddingTop: "50px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/classroom" element={<ClassRoom />} />
            <Route path="/contactform" element={<ContactForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/kidprofile" element={<KidProfile />} />
          </Routes>
        </Container>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
