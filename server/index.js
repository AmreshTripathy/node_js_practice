const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    // console.log(req);
    const log = `${new Date().toUTCString()} : ${req.url} New request received\n`;
    fs.appendFile('log.txt', log, (err, data) => {
        switch (req.url) {
            case '/': 
                res.end('HomePage');
                break;
            case '/about':
                res.end('I am Amresh Tripathy');
                break;
            default:
                res.end('404 Not Found');
        }
    });
});

myServer.listen(8000, () => console.log("Server started!"));