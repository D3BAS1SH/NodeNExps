console.log(__dirname);
let intVal=setInterval(()=>{
    console.log("hello World");
},1000)

setTimeout(()=>{
    clearInterval(intVal)
},5000)