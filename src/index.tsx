import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/tailwind.css";

// import Landing from "views/Landing.tsx";
import Landing from "./views/Landing";
import Services from "./views/Services.tsx";
import About from "./views/About.jsx";
import Testimonals from "./views/Testimonials.jsx";
import Profile from "./views/Profile.jsx";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/services" exact component={Services} />
      <Route path="/about" exact component={About} />
      <Route path="/testimonals" exact component={Testimonals} />
      <Route path="/profile" exact component={Profile} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);
