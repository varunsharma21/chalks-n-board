import "./App.css";
import About from "./components/About/About";
import Advertisement from "./components/Advertisement/Advertisement";
import Features from "./components/Features/Features";
import Home from "./components/Home/Home";
import Price from "./components/Price/Price";
import Reasons from "./components/Reasons/Reasons";
import Tabbar from "./components/Tabbar/Tabbar";
import Teacher from "./components/Teacher/Teacher";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Tabbar />
      <Home />
      <About />
      <Features />
      <Teacher />
      <Reasons />
      <Price />
      <Testimonials />
      <Advertisement />
    </div>
  );
}

export default App;
