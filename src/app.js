import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use((req, res)=>{
    res.status(404).json({err: "Rota não encontrada"})
})

export default app;