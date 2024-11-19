function welcome(){
console.log("Welcome to Employee Wage Computation Program");
}
welcome()

function checkAttendance(){

    const status = Math.floor(Math.random() * 2)
    console.log(status);
    
    if(status === 1)
        console.log("Present");
    else
        console.log("Absent");
} 
checkAttendance();      
        