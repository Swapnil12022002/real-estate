import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Header from "./components/header/Header";
import Offerings from "./components/offerings/Offerings";
import Team from "./components/team/Team";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Offerings />
      <Team />
    </div>
  );
}

export default App;
