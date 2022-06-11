import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './routes/Home/Home';
import { ROUTES } from './constants/Routes';
import CreateDocumentation from './routes/CreateDocumentation/CreateDocumentation';
import About from './routes/About/About';
import Contact from './routes/Contact/Contact';
import ViewProjects from './routes/Projects/ViewProjects';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route
            path={ROUTES.CREATE_DOCUMENTATION}
            element={<CreateDocumentation />}
          />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.VIEW_PROJECTS} element={<ViewProjects />} />
          <Route path="/" element={<Navigate to={ROUTES.HOME} />} />
          <Route
            path="*"
            element={
              <main className="">
                <h1 className="text-4xl text-center">Oops, wrong link 🙄</h1>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
