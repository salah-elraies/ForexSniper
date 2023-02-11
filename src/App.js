import { Grid } from "@mui/material";
import Home from "pages/Home";
import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Grid>
              <Home />
            </Grid>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
