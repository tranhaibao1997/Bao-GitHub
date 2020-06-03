const http = require('http');
const request = require('request');
require('dotenv').config();

const clientId = "4c72bea4dbe62c9a14d5";
const secretKey = "48109067d7cc6615d113e882883f7f4050f25be9";

console.log('started server on port 5001');

http.createServer((req, res) => {
    var code = req.url.split("=")[1];
    if (code) {
        request.post('https://github.com/login/oauth/access_token', {
            form: {
                client_id: clientId,
                client_secret: secretKey,
                code: code
            }
        }, (err, r, body) => {
            res.writeHead(301, {
                'Location': 'http://localhost:3000?' + body
            });
            res.end();
        })

    } else {
        res.writeHead(404);
        res.end();
    }
}).listen(5001);