import * as React from "react"
import {forwardRef, useCallback, useEffect} from "react"
import {ITodo} from "../types/type.todo"
import {deleteTodoById, getTodos, updateTodo} from "../api/requests"
import {TextField} from "@material-ui/core"
import MaterialTable, {Icons} from "material-table"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import DialogActions from "@material-ui/core/DialogActions"
import DeleteIcon from '@material-ui/icons/Delete'
import Button from "@material-ui/core/Button"
import {AddTodo} from "./AddTodo"

export default function ShowTodos() {

  const [todos, setTodos] = React.useState<ITodo[]>([])

  const [selectedTodo, setSelectedTodo] = React.useState<ITodo>({
    _id: "",
    name: "",
    text: "",
    status: false,
    createdAt: ""
  })

  const [dialogState, setDialogState] = React.useState<boolean>(false)

  const headers = [
    {title: 'name', field: 'name'},
    {title: 'description', field: 'text'},
    {title: 'created at', field: 'createdAt', defaultSort: "desc" as const}
  ]


  const tableIcons: Icons = {
    Delete: forwardRef((props, ref) => <DeleteIcon {...props} ref={ref}/>)

  }

  const handleStateChange = useCallback(newTodo =>
      setTodos([...todos, newTodo]), [todos]
  )

  const handleChange = (event) => {
    console.log(event.target)
    this.setState({
      todo: event.target.value,
    })
  }

  useEffect(() => {
    getTodos()
    .then(({data: {todos}}: ITodo[] | any) => {
      setTodos(todos)
    })
    .catch((err: Error) => console.log(err))
  }, [])

  const handleUpdate = (updatedTodo: ITodo) => {
    updateTodo(updatedTodo)
    .then(updatedTodo => setTodos(todos.map((todo) => todo._id === updatedTodo._id ? updatedTodo : todo)))
    .catch((err: Error) => console.log(err))

  }

  const handleDelete = (id: string) => {
    deleteTodoById(id)
    .then(id => setTodos(todos.filter(({_id: i}) => id !== i)))
    .catch((err: Error) => console.log(err))

  }
  return (
      <>
        <AddTodo onAdd={handleStateChange}/>
        <MaterialTable title="To Dos" columns={headers} data={todos}
                       icons={tableIcons}
                       options={{
                         pageSize: 20,
                         sorting: true
                       }}
                       onRowClick={(event, rowData) => {

                         setDialogState(true)
                         setSelectedTodo({
                           _id: rowData._id,
                           name: rowData.name,
                           text: rowData.text,
                           status: rowData.status,
                           createdAt: rowData.createdAt
                         })
                       }}
                       actions={[
                         {
                           icon: DeleteIcon,
                           tooltip: 'Delete Item',
                           onClick: (event, rowData: ITodo) => {
                             window.confirm("You want to delete " + rowData.name + "?")
                             handleDelete(rowData._id)

                           }
                         }
                       ]}
        />

        <Dialog
            open={dialogState}
            onClose={() => setDialogState(false)}
            onEnter={() => setSelectedTodo(selectedTodo)}
            aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Update</DialogTitle>
          <DialogContent>
            <TextField
                defaultValue={selectedTodo.text}
                autoFocus
                margin="dense"
                id="name"
                fullWidth
                onChange={event => {
                  const {value} = event.target
                  selectedTodo.text = value
                  setSelectedTodo(selectedTodo)
                }}
            />
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={() => setDialogState(false)}>
              Cancel
            </Button>
            <Button color="primary" onClick={() => {
              handleUpdate(selectedTodo)
              setDialogState(false)
            }}>
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </>
  )

}