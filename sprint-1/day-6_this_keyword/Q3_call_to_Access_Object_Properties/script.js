const person={
    name:"Alice",
    age:22
};

function personInfo(){
    console.log(`Name: ${this.name}, Age:${this.age}`);
}

personInfo.call(person)