import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./App.css";
import Footer from "./components/Footer";
import Projects from "./components/Projects/Projects";
import About from "./components/AboutMe/About";
import Resume from "./components/Resume/Resume"

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
