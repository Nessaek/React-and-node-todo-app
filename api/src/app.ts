import express, {Express} from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes/router'

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use(todoRoutes)


const uri: string = `mongodb+srv://<user-name>:<pass-word>@cluster0.v6qjw.gcp.mongodb.net/todos?retryWrites=true&w=majority`
const options = {useNewUrlParser: true, useUnifiedTopology: true}
mongoose.set('useFindAndModify', false)

mongoose
.connect(uri, options)
.then(() =>
    app.listen(PORT, () =>
        console.log(`Server running on http://localhost:${PORT}`)
    )
)
.catch((error) => {
  throw error
})