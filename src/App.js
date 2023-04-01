import './App.css';
import Navbar from './components/navbar/Navbar';
import footer from './components/footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Aside from "./components/dashboard/aside/Aside";
import Registration from './components/registration/Registration';
function App() {
  return (
    <Router>
      <div className="App">
      </div>
      <Routes>
        <Route path="/"
          exact element={<Navbar />}>
        </Route>
        <Route path='/dashboard' 
           exact element={<Aside/>}>
        </Route>
        <Route path='/registration' 
           exact element={<Registration/>}>
        </Route> 
      </Routes>
    </Router>
  );
}
export default App;
