function welcome(){
console.log("Welcome to Employee Wage Computation Program");
}
welcome()

async function EmpWageComputation() {
    try{
        let attendanceStatus = await checkAttendance();
        const calculateWage = await DailyWageCalculator(attendanceStatus);
        console.log(`Daily Wage of Employee is Rs.${calculateWage}`)
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
            reject("Absent");
    })   
} 

const FullDayHour = 8;
const WagePerHour = 20;

const DailyWageCalculator = (status) => {
    return new Promise((resolve,reject) => {
        if(status === "Present"){
            const Dailywage = FullDayHour*WagePerHour;
            resolve(Dailywage)
        }
        else{
            reject("absent = nowork = nosalary")
        }
    })
}
EmpWageComputation();     