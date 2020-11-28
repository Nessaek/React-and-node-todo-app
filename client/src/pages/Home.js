import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from "@material-ui/core/Grid"
import ShowTodos from "../components/ShowTodos"

const useStyles = makeStyles((theme) => ({

  paper: {
    textAlign: 'center'
  },
}))

export default () => {
  return (
      <Grid>
        <Grid container direction="column"
              justify="center"
              alignItems="center"
        >
        </Grid>
        <Grid item xs={10}>
          <ShowTodos/>
        </Grid>

      </Grid>
  )
};