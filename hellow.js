var http=require('http');
var se=http.createServer(function(req,res){
if (req.url=='/'){
    res.writeHead(200,{'content-type':'text'})
    res.write('<h2>hellow</h2>')
    res.end();
}else if(req.url=='/about'){
    res.writeHead(200,{'content-type':'text'})
    res.write('<h2>hello</h2>')
    res.end();
}else if(req.url=='/h'){
    res.writeHead(200,{'content-type':'text'})
    res.write('<h2>hell</h2>')
    res.end();
}
});
se.listen(550)
console.log("oh!")