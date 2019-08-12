const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri || "mongodb://localhost/googlebooks", { useNewUrlParser: true, useCreateIndex: true });

// ATLAS_URI=mongodb+srv://bookDb:bookDb@cluster0-nej0t.gcp.mongodb.net/test?retryWrites=true&w=majority
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Define API routes here
app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
