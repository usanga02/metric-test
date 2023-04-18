import "./App.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Last3days, LastHour, Today, Yesterday } from "./pages";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header title="Main matrics" />
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/lasthour" element={<LastHour />}></Route>
            <Route path="/" element={<Today />}></Route>
            <Route path="/yesterday" element={<Yesterday />}></Route>
            <Route path="/last3days" element={<Last3days />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
