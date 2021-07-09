const express = require("express");
const app = express();

const contact = require("./routes/agendaRoutes");

app.use(express.json());
app.use("/", contact);


module.exports = app