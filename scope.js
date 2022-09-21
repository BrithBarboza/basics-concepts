// Scope local
function WhoAreYou() {
    const IAmStudent = true;
    console.log(IAmStudent);
}

WhoAreYou(); // true
console.log(IAmStudent); // IAmStudent is not defined

// Scope global
const IAmStudent = true;
function WhoAreYou() {
    console.log(IAmStudent);
}

WhoAreYou(); // true
console.log(IAmStudent); // true

// Shadow variable
function DoSomeCalculation(){
    const count = 10;
    if (true){
        const count = 20;
        console.log(count); // result should be 20
    }
    console.log(count); // result should be 10
}