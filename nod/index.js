const http = require("http");

const port = 3000;

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "application-json" });
    res.write('{"ok": "why not"}');
    res.end();
  })
  .listen(port, () => console.log("workin"));
