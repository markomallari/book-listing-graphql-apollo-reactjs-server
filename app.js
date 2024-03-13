const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//allow cross origin request
app.use(cors());

//connect to mlab db
mongoose.connect(
  "mongodb+srv://mallarimarkjomel:izad47MnkTCXHUhf@cluster0.pzsjf1r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
