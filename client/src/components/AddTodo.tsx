import FormControl from "@material-ui/core/FormControl";

import { Fragment } from "react";
import * as React from "react";
import apis from "../api";
import {Button, OutlinedInput} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper"

export default function AddTodo () {

  const [todo, setTodoValue] = React.useState<string>("no problem");


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTodoValue(value);
  };


  const onSubmit = () => {

  };


    return (
        <Paper>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Add</InputLabel>
            <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
            <Button size="small" type="submit">
              Add
            </Button>
          </FormControl>
        </Paper>
    );

}