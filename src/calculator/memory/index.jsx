import React, { Component } from "react";
import {
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const memoryItemCreator = (value, removeFromMemory, setCurrentValue) => {
  const handleClick = () => setCurrentValue(value);
  const handleRemove = () => removeFromMemory(value);

  return (
    <ListItem key={value}>
      <ListItemText>
        <Button variant="outlined" color="primary" onClick={handleClick}>
          {value}
        </Button>
      </ListItemText>

      <ListItemSecondaryAction>
        <IconButton onClick={handleRemove} aria-label="Delete">
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

class Memory extends Component {
  render() {
    const { memory, removeFromMemory, setCurrentValue } = this.props;

    const memoryItems = (
      <List dense>
        {memory.map(value =>
          memoryItemCreator(value, removeFromMemory, setCurrentValue)
        )}
      </List>
    );

    return (
      <div style={{ height: 400 }}>
        <Paper style={{ height: 400 }} elevation={4}>
          {memoryItems}
        </Paper>
      </div>
    );
  }
}

export default Memory;
