import * as React from "react"
import {OutlinedInput} from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import {ITodo} from "../types/type.todo"
import {makeStyles} from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import AddIcon from '@material-ui/icons/Add'
import {addTodo} from "../api/requests"
import * as moment from "moment/moment"


type Props = {
  onAdd: (todo: ITodo) => void
}

export const AddTodo: React.FC<Props> = ({onAdd}): any => {

  const useStyles = makeStyles(() => ({

    input: {
      width: '40%'
    }

  }))

  const classes = useStyles()

  const [todo, setTodoValue] = React.useState<string>()


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setTodoValue(value)
  }


  const submitEvent = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()

    const newTodo: Omit<ITodo, '_id'> = {
      name: "name",
      text: todo,
      status: false,
      createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
    }
    addTodo(newTodo)
    .then(todo => onAdd(todo))
  }


  return (
      <div>
        <Paper>
          <form>
            <OutlinedInput id="component-outlined" value={todo || ''} onChange={handleChange}
                           label="ToDo" className={classes.input}/>
            <IconButton edge="end" aria-label="add" onClick={e => submitEvent(e)}>
              <AddIcon/>
            </IconButton>
          </form>
        </Paper>
      </div>
  )

}