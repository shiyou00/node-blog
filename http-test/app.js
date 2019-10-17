const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req,res)=>{
    if(req.method === 'GET'){
        console.log(req.method);
        const url = req.url;
        console.log('url:',url);
        req.query = querystring.parse(url.split('?')[1]);
        res.end(JSON.stringify(req.query));
    }
    if(req.method === 'POST'){
        console.log('content-type',req.headers['content-type']);
        let postData = '';
        req.on('data',chunk =>{
            postData += chunk.toString();
        });
        req.on('end',()=>{
            console.log(postData);
            res.end('hello post');
        });
    }
});
server.listen(8000);