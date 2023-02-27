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
import MyWork from './Components/MyWork';
import Contact from './Components/Contact';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="About" element={<AboutMe />} />
          <Route path="MyWork" element={<MyWork />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
