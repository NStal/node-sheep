var commander = require("commander")
program = commander
    .option("--alone","don't accept input")
    .parse(process.argv)
if(!program.args[0]){
    program.help();
}
buffers = []
process.stdin.on("data",function(data){
    buffers.push(data)
})
process.stdin.on("close",function(){
    var input = Buffer.concat(buffers);
    var put = console.log.bind(console);
    input = input.toString();
    try{
        eval(program.args[0]);
    }catch(e){
        console.error(e);
    }
})
    
if(program.alone){
    process.stdin.end();
}
