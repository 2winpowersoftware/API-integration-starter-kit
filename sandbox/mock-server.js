const express = require("express");

const app = express();

app.get("/balance", (req, res) => {
  res.json({
    balance: 1000
  });
});

app.listen(4000);
