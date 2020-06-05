const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.use(require("./routes"));

app.listen(3001, function () {
  console.log("Aplicação escutando na porta 3001!");
});
