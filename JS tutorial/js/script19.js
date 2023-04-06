// Global variable vs Local variable
//Inside of function variable is called local variable we can write it only in funtion .
//Outsid of function variable is called Global variable we can write Global function everywhere. 

let car = "Audi";     //Global variable
console.log(car);

function add(){

    let result = 33;  //Local variable
    console.log(result);

}

function sub(){
    let result = 50;
    console.log(result);
}

add();

sub();

