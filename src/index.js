import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './App.css';



import reportWebVitals from './reportWebVitals';

import Layout from './Components/Layout';
import Homepage from './Components/Homepage/Homepage';
import AboutMe from './Components/About';
import MyWorkStudies from './Components/MyWorkStudies';
import Contact from './Components/Contact';

import Dime from './Components/CaseStudies/Dime';
import DinoDoods from './Components/CaseStudies/Dinodoods';
import Sensations from './Components/CaseStudies/Sensations';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="About" element={<AboutMe />} />
          <Route path="MyWork" element={<MyWorkStudies />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Sensations" element={<Sensations />} />
          <Route path="DinoDoods" element={<DinoDoods />} />
          <Route path="Dime" element={<Dime />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
