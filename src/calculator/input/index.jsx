import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";

const buttonRows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0, "."]];
const actionRows = ["/", "X", "-", "+", "="];

class Input extends Component {
  render() {
    const handleInput = e => console.log(e.currentTarget.value);

    const buttonItemCreator = (value, isAction) => (
      <Button
        key={`button${value}`}
        onClick={handleInput}
        style={{ width: "100%" }}
        variant={isAction ? "contained" : "outlined"}
        color={isAction ? "primary" : "default"}
        value={value}
      >
        {value}
      </Button>
    );

    return (
      <Grid container>
        <Grid item xs={9}>
          <Grid container>
            {buttonRows.map(r =>
              r.map(value => (
                <Grid key={`grid${value}`} item xs={value === 0 ? 8 : 4}>
                  {buttonItemCreator(value)}
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container>
            {actionRows.map(r => (
              <Grid key={`action${r}`} item xs={12}>
                {buttonItemCreator(r, true)}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Input;
