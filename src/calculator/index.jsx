import React, { Component } from "react";
import { Grid, Card, Divider } from "@material-ui/core";

import Result from "./result";
import Input from "./input";

class App extends Component {
  render() {
    return (
      <Grid container justify="center">
        <Card style={{ width: 300, maxHeight: 400 }}>
          <Grid item sm={12}>
            <Result {...this.props} />
          </Grid>
          <Grid item sm={12}>
            <Divider />
          </Grid>
          <Grid item sm={12}>
            <Input {...this.props} />
          </Grid>
        </Card>
      </Grid>
    );
  }
}

export default App;
