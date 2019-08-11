var socket=io();

socket.on('connect',function(){
  console.log('connected to server');


socket.emit('createMessage',{
  from:"raghav",
  text:"Yup,that works for me"
});

})


socket.on('disconnect',function(){
  console.log('server was disconnected');
});


socket.on('newMessage',function(message){
console.log('newMessage',message);

});
