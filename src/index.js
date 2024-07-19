const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

const tasks = require("./routes/task");
app.use(tasks);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`app is listen on port ${PORT}`);
});
