function custom_func_addition(num1, num2) {

    var num1
    var num2
    var num3 = num1 + num2
    return num3

}

custom_func_addition(4, 7)
function goodevening(student_name) {
    console.log("Hi" + student_name)
    return student_name

}
// function delayMessage(callback) {
//   setTimeout(
//     function () 
//                 {
//                     console.log("2 seconds passed...");
//                     callback(); // call the function you gave it
//                 },
//    8000);
// }

// function afterDelay() {
//   console.log("Now running the callback!");
// }

// delayMessage(afterDelay);
// delayMessage(afterDelay); 

function wait(name, callbacks) {
    setTimeout(
        function () {
            console.log("Hey your Conformation has recieved successfully" + name);
            callbacks();
        },
        8000
    );
    return name;

}

function conformation() {
    console.log("Thankyou for asking")
}
//wait("Radolf", conformation);

function process() {
    console.log("You have complete it")
}
function addition(value1, value2, result){
    setTimeout(
        function(){
                console.log(value1 + "is first value");
                console.log(value2 + "is second value");
               const value3 = value1 + value2;
                console.log("your total is " + value3);
                result(); 
                return value1, value2, value3;
        },
        3000
    )
    
}

addition(5, 9,process)
// its show undefne..?

// function functioneven(x){
//     if(x === 1 || x === 3 || x===5 || x===7 || x===9 || x===11){
//         console.log(x + "is odd number");
//     }
//     else
//     console.log(x + "is not odd number");
//     return x;
// }
// function checkeven(a, evennum){
//     setTimeout(
//         function(){
//             console.log("waiting ...");
//            return evennum()
//         }
//     ,4000)
//     return a;
// }

