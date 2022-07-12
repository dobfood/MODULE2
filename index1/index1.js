function greek() {
    for(let i=0 ;i<=10;i+=2){
        console.log(i+"")
    }
    console.log('for(;;)')
    for (let i of['de buf',20.30,300]){
        console.log(i+"")
    }
    let obj={name:'per',age:30,saleri:3000}
    for(let i in obj){
        console.log(obj[i]+"")
    }
}
greek()