const path=require('path');
const http=require('http');
const publicPath=path.join(__dirname,'../public');

const express=require("express");
const socketIO=require('socket.io');

const port=process.env.PORT

var app=express();
var server=http.createServer(app);
var io=socketIO(server);


app.use(express.static(publicPath));

io.on('connection',(socket)=>{
  console.log('New User connected');




//socket.emit('newMessage',{
  //from:'john',
  //text:'see you then',
  //createdAt:123123
//});


socket.emit('newMessage',{
  from:'admin',
  text:'welcome'
})
socket.broadcast.emit('newMessage',{
  from:'admin',
  text:"new user joined",
  createdAt:new Date().getTime
})



socket.on('createMessage',(message)=>{
  console.log(message);

  io.emit('newMessage',{
    from:message.from,
    text:message.text,
    createdAt:new Date().getTime()
  })
})

  socket.on('disconnect',()=>{
    console.log('user was disconnected');
  })

})



server.listen(3000,()=>{                             //didnt understood this line
  console.log(`server is up on 3000`);
});
