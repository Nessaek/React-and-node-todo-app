import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import AddTodo from "../components/AddTodo";

export default () => (
    <div>
    <Typography variant="h4">Welcome Home!</Typography>
    <AddTodo />
    </div>
);