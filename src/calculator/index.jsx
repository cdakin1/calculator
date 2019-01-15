import React, { Component } from "react";
import { Grid, Card, Divider, Collapse } from "@material-ui/core";

import Result from "./result";
import Input from "./input";
import Memory from "./memory";

class App extends Component {
  render() {
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <div style={{ width: 150 }}>
          <Collapse in={!!this.props.memory.length}>
            <Memory {...this.props} />
          </Collapse>
        </div>
        <Card style={{ width: 300, height: 400 }}>
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
