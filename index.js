var commander = require("commander")
program = commander.parse(process.argv)
buffers = []
process.stdin.on("data",function(data){
    buffers.push(data)
})
process.stdin.on("end",function(){
    var input = Buffer.concat(buffers);
    var put = console.log.bind(console);
    input = input.toString();
    try{
        eval(program.args[0]);
    }catch(e){
        console.error(e);
    }
})
    
