const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({extended:true})) // req.body will be undefined in routes
app.use(express.json()) 
app.use(express.static("public"))

app.use(require("./routes/apiRoutes"))
app.use(require("./routes/htmlRoutes"))


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });