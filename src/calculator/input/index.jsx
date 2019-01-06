import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";

const buttonRows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0, "."]];
const actionRows = [
  { value: "C", action: "clear" },
  { value: "M", action: "addToMemory" },
  { value: "/", action: "divide" },
  { value: "X", action: "multiply" },
  { value: "-", action: "subtract" },
  { value: "+", action: "add" },
  { value: "=", action: "equals" }
];

class Input extends Component {
  render() {
    const handleNumberInput = e => {
      this.props.updateCurrentValue(e.currentTarget.value);
    };

    const handleActionInput = e => {
      this.props[e.currentTarget.name]();
    };

    const buttonItemCreator = (value, isAction, action) => (
      <Button
        key={`button${value}`}
        onClick={isAction ? handleActionInput : handleNumberInput}
        style={{ width: "100%" }}
        variant={isAction ? "contained" : "outlined"}
        color={isAction ? "primary" : "default"}
        value={value}
        name={action}
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
              <Grid key={`action${r.value}`} item xs={12}>
                {buttonItemCreator(r.value, true, r.action)}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Input;
