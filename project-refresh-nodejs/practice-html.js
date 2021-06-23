const http = require("http");

const server = http.createServer((req, res) => {
  console.log("INCOMING REQUEST");
  console.log(req.method, req.url);

  if (req.method === "POST") {
    req.on("end", () => {
      console.log(body);
      res.end(body.split("=")[1]);
    });
    let body;
    req.on("data", (chunk) => {
      if (chunk !== undefined) body += chunk;
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.end(
      '<form method="POST"><input type="text" name="username"/><button type="submit">OK</button></form>'
    );
  }
});

server.listen(5000);
