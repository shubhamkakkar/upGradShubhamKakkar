import React, { Component } from 'react';
import { Grid } from "@material-ui/core"
import PhoneAdder from "./container/PhoneAdder/PhoneAdder"
import PhoneBook from "./container/PhoneBook/PhoneBook"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12} sm={4} style={{ padding: "2.25mm" }}>
            <PhoneAdder />
          </Grid>
          <Grid item xs={12} sm={8} style={{ padding: "2.25mm" }}>
            <PhoneBook />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
