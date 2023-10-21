import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Tabbar from "./components/Tabbar/Tabbar";

function App() {
  return (
    <div className="App">
      <Tabbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
