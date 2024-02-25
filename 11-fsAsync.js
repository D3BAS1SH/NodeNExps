const {readFile,writeFile} = require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return null
    }
    console.log(result);
    const First = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return null
        }
        const second=result
        writeFile('./content/result-Async.txt',
        `Here is the fsAsync result :${First}, ${second}`,{flag:'a'},(err,result)=>{
            if(err){
                console.log(err);
                return null
            }
            console.log(result);
        })
    })
})