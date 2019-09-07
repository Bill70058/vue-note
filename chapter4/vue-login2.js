var express=require('express');
var bodyParser=require('body-parser');
var server = express();

server.listen(1234);
server.use(express.static('./'));

var json = {
    'bill':'111'
}

server.use(bodyParser.urlencoded());
server.use('/postMsg',function(req,res){
   console.log(req.body);
})

server.use('/a',function(req,res){
    console.log(req.query);
    // res.send();
    if(json[req.query.user]==req.query.pass){
        res.send({ok:1,'msg':'登陆成功'});
    }else{
        res.send({ok:0,'msg':'用户名或密码错误'});
    }
})

