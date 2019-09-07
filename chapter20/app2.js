const express = require('express');
const server = express();
const bodyParser = require('body-parser');

server.listen(2183);

server.use(bodyParser.urlencoded({}));
server.use('/book',(req,res)=>{

	//console.log(req.body);
	
	console.log(req.body.myId);
	if(req.body.myId=='21617636'){
		res.send({ok:1,data:'结婚前的苏苒，常常从过去的噩梦中惊醒；结婚后的苏'})
	}
	else if(req.body.myId == '21366663'){
		res.send({ok:1,data:'他是赫赫有名的宁家四公子，所有女人心目中的完美'})
	}
	
	//console.log(req.query);
	//res.send({ok:1})
});

server.use(express.static('./'))