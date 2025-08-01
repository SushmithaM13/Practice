function checkEvenNumber(number){
    return new Promise((resolve, reject)=>{
        if(typeof number==="number" && number %2===0){
            resolve(`${number} is even`)
        }else{
            reject(`${number} is odd or invalid`)
        }
    })
}

checkEvenNumber(4).then(console.log).catch(console.error); // "4 is even"
checkEvenNumber(5).then(console.log).catch(console.error); // "5 is odd or invalid"
checkEvenNumber("hello").then(console.log).catch(console.error); // "hello is odd or invalid"