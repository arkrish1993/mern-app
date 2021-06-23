const fs = require("fs");

const userName = "Puffinbird";

fs.writeFile("user-data.txt", "Name: " + userName, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("WROTE FILE");
});
