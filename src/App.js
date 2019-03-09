import React, { Component } from 'react';
import { Grid, AppBar, Toolbar, Typography, Button } from "@material-ui/core"
import PhoneAdder from "./container/PhoneAdder/PhoneAdder"
import PhoneBook from "./container/PhoneBook/PhoneBook"
import './App.css';

class App extends Component {
  state = {
    phoneAdder: false
  }
  render() {
    return (
      <Grid container style={{ textAlign: "center" }}>
        <Grid item xs={12} style={{ marginBottom: "20px" }}>
          <AppBar position="static" style={{ background: "white" }}>
            <Toolbar style={{ justifyContent: "center" }}>
              <Typography variant="h6" color="secondary" >
                Phone Directory
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>

        <Grid item xs={12} md={6} style={{ padding: "2.25mm" }}>
          {
            this.state.phoneAdder ?
              <div>
                <PhoneAdder />
                <Button
                  variant="outlined"
                  style={{ marginTop: "10px" }}
                  color='secondary'
                  onClick={() => this.setState({ phoneAdder: false })}>
                  Hide
                </Button>
              </div>
              :
              <Button variant="outlined" color='primary' onClick={() => this.setState({ phoneAdder: true })}>
                Add Contact
              </Button>
          }
        </Grid>
        <Grid item xs={12} md={6} style={{ padding: "2.25mm" }}>
          <PhoneBook />
        </Grid>
      </Grid>
    );
  }
}

export default App;
