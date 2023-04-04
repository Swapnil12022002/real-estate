import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Header from "./components/header/Header";
import Offerings from "./components/offerings/Offerings";
import Team from "./components/team/Team";
import Blog from "./components/blogs/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Offerings />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
