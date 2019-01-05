import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { unstable_Box as Box } from "@material-ui/core/Box";

class Result extends Component {
  render() {
    const { currentResult } = this.props;
    console.log(currentResult);
    return (
      <Typography component="div">
        <Box style={{ margin: 20 }} textAlign="right" fontSize={24}>
          {currentResult.currentValue}
        </Box>
      </Typography>
    );
  }
}

export default Result;
