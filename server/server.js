const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const forms = require("./formList.json");
app.use(bodyParser.json());

app.post("/formList", (req, res) => {
  forms.push(req.body); // added the call to the forms variable. NOT formlist.json yet!!
  res.send(forms);
  console.log(req.body);
});

app.listen(8080, () => console.log("running on port 8080"));
