import React from "react"
import './index.scss';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {Home} from "../src/pages/Home"
import {About} from "../src/pages/About"
import { Navbar } from "./components/Navbar";
import { Alert } from "./components/Alert";
import { AlertState } from "./context/alert/AlertState";

function App() {
  return (
    <AlertState>
      <BrowserRouter>
      <Navbar/>
        <div className="container pt-4">
          <Alert/>
          <Switch>
            <Route path={"/"} exact component={Home}/>
            <Route path={"/about"} component={About}/>
          </Switch>
        </div>
      </BrowserRouter>
    </AlertState >
  );
}

export default App;
