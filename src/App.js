import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Header from "./components/header/Header";
import Offerings from "./components/offerings/Offerings";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Offerings />
    </div>
  );
}

export default App;
