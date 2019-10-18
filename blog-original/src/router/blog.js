const handleBlogRouter = (req, res)=>{
    const method = req.method;

    if(method === 'GET' && req.path === '/api/blog/list'){
        return {
            msg:'blog list data'
        }
    }

    if(method === 'GET' && req.path === '/api/blog/detail'){
        return {
            msg:'blog detail data'
        }
    }

    if(method === 'POST' && req.path === '/api/blog/new'){
        return {
            msg:'post new blog data'
        }
    }

    if(method === 'POST' && req.path === '/api/blog/update'){
        return {
            msg:'update new blog data'
        }
    }

    if(method === 'POST' && req.path === '/api/blog/delete'){
        return {
            msg:'delete new blog data'
        }
    }
}
module.exports = handleBlogRouter;