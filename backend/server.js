const express = require('express')
const app = express()
const port = 8000
const cors = require("cors")
const fs = require("fs")

app.use(cors());

function loadData(filename = "") {
	return JSON.parse(fs.existsSync(filename) ? fs.readFileSync(filename).toString() : "null");
}

const data = loadData("./api/dogs.json")

app.get("/api/dogs", (req, res) => res.send(data));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})