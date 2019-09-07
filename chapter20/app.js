const express = require('express');
const bodyParser = require('body-parser');
const server = express();

server.listen(1234);


server.use(bodyParser.urlencoded);
server.use('/book',function(req,res){
    // console.log(req.query.id);
    // res.send({ok:1});
    // if(req.query.id == '121212'){
    //     res.send({ok:1,data:'这是中国四大名著之一 -- 红楼梦'})
    // }else{
    //     res.send({ok:2,data:'这是中国四大名著之一 -- 西游记'})
    // }
    console.log(req.body);
    res.end();
});

server.use(express.static('./'));