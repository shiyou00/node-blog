const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');
const querystring = require('querystring')

const serverhandle = (req, res) => {

    const url = req.url;
    req.path = url.split('?')[0];
    req.query = querystring.parse(url.split('?')[1]);
    // 设置返回格式 JSON
    res.setHeader('Content-type','application/json');
    const blogData = handleBlogRouter(req, res);
    if(blogData){
        res.end(JSON.stringify(blogData));
        return;
    }
    const userData = handleUserRouter(req, res);
    if(userData){
        res.end(JSON.stringify(userData));
        return;
    }

    res.writeHead(404,{"Content-type":"text/plain"});
    res.end("404 Not Found");
}

module.exports = serverhandle;