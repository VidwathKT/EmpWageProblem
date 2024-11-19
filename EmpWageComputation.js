function welcome(){
console.log("Welcome to Employee Wage Computation Program");
}
welcome()

async function EmpWageComputation() {
    try{
        let attendanceStatus = await checkAttendance();
        console.log(attendanceStatus);
        let empType = EmpType();
        const calculateWage = await DailyWageCalculator(empType);
        console.log(`Daily Wage of Employee is Rs.${calculateWage}`);
    }
    catch(error){
        console.log(error);
        
    }
}

const checkAttendance = () => {
    return new Promise((resolve,reject) =>{
        const status = Math.floor(Math.random() * 2)
    
        if(status === 1)
            resolve("Present");
        else
            reject("Absent -> so no salary");
    })   
} 

const FullDayHour = 8;
const WagePerHour = 20;
const PartTimeHour = 4;

const DailyWageCalculator = (type) => {

           const WorkHour = type ? FullDayHour:PartTimeHour;    
           const Dailywage = WorkHour*WagePerHour;
           return Dailywage;
}

const EmpType = ()=>{
    const type = Math.random() < 0.5 ? "PartTime" : "FullTime"
    console.log(`Employee Type is: ${type}`);
    return type === "FullTime"
}
EmpWageComputation();     