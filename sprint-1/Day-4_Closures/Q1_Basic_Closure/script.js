function outerFunction(){
    let message="hello from clouser";

    return function innerFunction(){
        console.log(message);
    }
}

const myClosure=outerFunction();
myClosure();

