import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Container from "react-bootstrap/Container"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import ClassRoom from "./pages/Classroom";
import Contact from "./pages/Contact";


function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Container style={{ paddingTop: "50px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/classroom" element={<ClassRoom/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      </Router>
    </div>
  )
}

export default App; 