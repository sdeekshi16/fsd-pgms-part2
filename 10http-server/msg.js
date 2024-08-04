const http = require("http");

const host = 'localhost';
const port = 1600;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/plain");
    res.writeHead(200);
    res.end("server is active");
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
