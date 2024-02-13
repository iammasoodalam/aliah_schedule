import express from 'express'
import fs from 'fs'
const app = express();
const PORT = 3000;

app.use(express.static("public"))
app.set("view engine", "ejs");

let file = fs.readFileSync("schedules/cse-sem-4.json", "utf-8")
let obj = JSON.parse(file)
let date = new Date();
let day = date.getDay();

app.get("/", (req, res) => {
  res.render("index", { data: obj, day: req.query.day || day - 1 });
})

app.listen(PORT)