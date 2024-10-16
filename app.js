const http = require("http");
const finalhandler = require("finalhandler");
const servestatic = require("serve-static");
var serve = servestatic("./public");
var server = http.createServer((req, res) => {
    var done = finalhandler(req, res);
    serve(req, res, done);
});
server.listen(3000, () => {
    console.log("Server is up!");
});

