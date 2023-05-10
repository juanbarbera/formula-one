import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";

import { DriversHome } from './pages/Drivers/DriversHome';
import { Ayrton } from './pages/Drivers/DriversPage/Ayrton';
import { Lewis } from './pages/Drivers/DriversPage/Lewis';
import { Niki } from './pages/Drivers/DriversPage/Niki';
import { Michael } from './pages/Drivers/DriversPage/Michael';
import { Juan } from './pages/Drivers/DriversPage/Juan';
import { Jim } from './pages/Drivers/DriversPage/Jim';

import { CarsHome } from './pages/Cars/CarsHome';
import { Brawn } from './pages/Cars/CarsPage/Brawn';
import { Ferrari } from './pages/Cars/CarsPage/Ferrari';
import { Redbull } from './pages/Cars/CarsPage/Redbull';
import { Mercedes } from './pages/Cars/CarsPage/Mercedes';
import { Mclaren } from './pages/Cars/CarsPage/Mclaren';
import { Williams } from './pages/Cars/CarsPage/Williams';

import { CircuitsHome } from './pages/Circuits/CircuitsHome';
import { Spa } from './pages/Circuits/CircuitsPage/Spa';
import { Interlagos } from './pages/Circuits/CircuitsPage/Interlagos';
import { Monaco } from './pages/Circuits/CircuitsPage/Monaco';
import { Silverstone } from './pages/Circuits/CircuitsPage/Silverstone';
import { Nurburgring } from './pages/Circuits/CircuitsPage/Nurburgring';
import { Monza } from './pages/Circuits/CircuitsPage/Monza';

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/drivers" element={<DriversHome />} />
      <Route path="/drivers/drivers-page/ayrton-senna" element={<Ayrton />} />
      <Route path="/drivers/drivers-page/lewis-hamilton" element={<Lewis />} />
      <Route path="/drivers/drivers-page/niki-lauda" element={<Niki />} />
      <Route path="/drivers/drivers-page/michael-schumacher" element={<Michael />} />
      <Route path="/drivers/drivers-page/juan-fangio" element={<Juan />} />
      <Route path="/drivers/drivers-page/jim-clark" element={<Jim />} />

      <Route path="/cars" element={<CarsHome />} />
      <Route path="/cars/cars-page/brawn-bgp001" element={<Brawn />} />
      <Route path="/cars/cars-page/ferrari-f2002" element={<Ferrari />} />
      <Route path="/cars/cars-page/redbull-rb9" element={<Redbull />} />
      <Route path="/cars/cars-page/mercedes-w11" element={<Mercedes />} />
      <Route path="/cars/cars-page/mclaren-mp4-6" element={<Mclaren />} />
      <Route path="/cars/cars-page/williams-fw14b" element={<Williams />} />

      <Route path="/circuits" element={<CircuitsHome />} />
      <Route path="/circuits/circuits-page/spa-francorchamps" element={<Spa />} />
      <Route path="/circuits/circuits-page/interlagos" element={<Interlagos />} />
      <Route path="/circuits/circuits-page/monaco" element={<Monaco />} />
      <Route path="/circuits/circuits-page/silverstone" element={<Silverstone />} />
      <Route path="/circuits/circuits-page/nurburgring" element={<Nurburgring />} />
      <Route path="/circuits/circuits-page/monza" element={<Monza />} />
    </Routes>
  </Router>
)