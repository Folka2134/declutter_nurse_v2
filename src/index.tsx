import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "@fortawesome/fontawesome-free/css/all.min.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "../src/styles/tailwind.css";

// import Landing from "views/Landing.tsx";
import Landing from "./views/Landing";
import Services from "./views/Services.tsx";
import About from "./views/About.jsx";
import Testimonals from "./views/Testimonials.jsx";

const container: HTMLElement | null = document.getElementById("root");
const rootContainer = container ?? document.body;
const root = createRoot(rootContainer);
root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/services" exact component={Services} />
      <Route path="/about" exact component={About} />
      <Route path="/testimonals" exact component={Testimonals} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);
