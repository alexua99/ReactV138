import React from "react";
import {Routes, Route, Link} from "react-router";



export default function App() {
  return (
      <div className="App">
          <header>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/about">About</Link>
                  </li>
                  <li>
                      <Link to="/service">Service</Link>
                  </li>
                  <li>
                      <Link to="/contact">Contact</Link>
                  </li>
              </ul>
          </header>

          <main>
              <Routes>
                  <Route path="/" element={<h1>Home</h1>}/>
                  <Route path="/about" element={<h1>About</h1>}/>
                  <Route path="/service" element={<h1>Service</h1>}/>
                  <Route path="/contact" element={<h1>Contact</h1>}/>
                  <Route path="*" element={<h1>404</h1>}/>
              </Routes>
          </main>

          <footer>
              <h2>Footer</h2>
          </footer>
      </div>
  );
}

