const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotEnv = require("dotenv");
let mongodb = require("./config");
const User = require("./models/users");
const Apps = require("./models/apps");
const Post = require("./models/apps")
const mongoose = require("mongoose")

app.use(cors());
dotEnv.config({ path: "./.env" });


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(mongodb);

app.get("/", (req, res) => {
  new User({ name: "test" })
    .save()
    .then((data) => {
        mongoose.connection.close()
      console.log("======>>", data);
      res.send(data);
    })
    .catch((error) => {
        mongoose.connection.close()
      console.log("error ====", error);
    });
});


app.post("/admin",(req,res)=>{
    new Apps({ name: "Aijaz" })
    .save()
    .then((data) => {
        mongoose.connection.close()
      console.log("======>>", data);
      res.send(data);
    })
    .catch((error) => {
        mongoose.connection.close()
      console.log("error ====", error);
    });
})


app.post("/add/post",(req,res)=>{
    let {postName} = req.body
    new Post({ name: postName })
    .save()
    .then((data) => {
        mongoose.connection.close()
      console.log("======>>", data);
      res.send(data);
    })
    .catch((error) => {
        mongoose.connection.close()
      console.log("error ====", error);
    });
})

app.listen(4000, () => {
  console.log("PORT=4000");
});
