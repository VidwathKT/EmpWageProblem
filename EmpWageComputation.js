function welcome(){
console.log("Welcome to Employee Wage Computation Program");
}
welcome()
const TotalWorkinDays = 20;
let MonthlyWage=0;
async function EmpWageComputation() {
  for(i=0;i<TotalWorkinDays;i++){
    try{
        let attendanceStatus = await checkAttendance();
        //console.log(attendanceStatus);
        let empType = EmpType();
        const calculateWage = DailyWageCalculator(empType);
        MonthlyWage += calculateWage;
        
    }
    catch(error){
        
        //console.log(error);
        
    }
  }
  console.log(`Monthly Wage of Employee is Rs.${MonthlyWage}`);
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

        let Dailywage;
           switch (type) {
                case 'fullTime':
                    Dailywage = FullDayHour*WagePerHour;
                    break;
                case 'partTime':
                    Dailywage = PartTimeHour*WagePerHour;
                    break;
                default:
                    reject('Invalid employee type');
            }
           
    return Dailywage;
}

const EmpType = ()=>{
    const randomValue = Math.random()
  //console.log(randomValue);
    let type ;
    switch (true) {
        case randomValue < 0.5:
            type = 'fullTime';
            break;
        case randomValue >= 0.5:
            type = 'partTime';
            break;
        default:
            type = 'unknown';
    }
    //console.log(`Employee Type is: ${type}`);
    return type
}
EmpWageComputation();     