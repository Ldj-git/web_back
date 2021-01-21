const express = require("express");
const app = express();
app.use(express.json());
app.post("/", function (req, res) {
  var input = req.body.num;
  var output;
  if (input[2] >= 3 && input[1] >= 4 && input[8] >= 4) {
    output = 1;
  } else if (input[2] >= 3 && input[1] >= 4 && input[8] <= 3) {
    output = 2;
  } else if (input[2] >= 3 && input[1] <= 3 && input[8] >= 4) {
    output = 3;
  } else if (input[2] >= 3 && input[1] <= 3 && input[8] <= 3) {
    output = 4;
  } else if (input[2] <= 2 && input[4] >= 4 && input[3] <= 3) {
    output = 5;
  } else if (input[2] <= 2 && input[4] >= 4 && input[3] >= 4) {
    output = 6;
  } else if (input[2] <= 2 && input[4] <= 3 && input[7] >= 4) {
    output = 7;
  } else if (input[2] <= 2 && input[4] <= 3 && input[7] <= 3) {
    output = 8;
  }
  console.log(output);
  res.json(output);
});

app.listen(5000, () => console.log("con Success on port 5000."));
