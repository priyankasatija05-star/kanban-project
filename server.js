require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({
  origin: "http://localhost:3000", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended:true})) ;
const authRoutes = require("./src/config/routes/authRoutes");
// const aiRoutes= require("./src/config/routes/aiRoutes")
const taskRoutes = require("./src/config/routes/taskRoutes")
// Load routes
app.get("/", (req, res) => {
  res.send("Kanban Backend is running 🚀");
});

app.use("/auth", authRoutes);
// app.use("/api/ai", aiRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/list', taskRoutes);
const PORT = process.env.PORT||8080;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})