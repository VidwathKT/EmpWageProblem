class Employee{
    static FullDayHour = 8;
    static WagePerHour = 20;
    static PartTimeHour = 4;
    static MaxWorkingHours =100;
    static MaxWorkingDays=20;

    constructor(){
        this.TotalWagePerMonth =0;
        this.TotalWorkingHour =0;
        this.TotalWorkingDays =0;
        this.EmployeeType = Employee.EmpType();
    }

static checkAttendance (){
    return new Promise((resolve,reject) =>{
        const status = Math.floor(Math.random() * 2)
    
        if(status === 1)
            resolve("Present");
        else
            reject("Absent -> so no salary");
    })   
} 
static EmpType = ()=>{
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
    console.log(`Employee Type is: ${type}`);
    return type;
}

DailyWageCalculator(attendance) {
    return new Promise((resolve, reject) => {
        if (attendance === 'Present') {
            let workHour = this.EmployeeType === 'fullTime' ? Employee.FullDayHour : Employee.PartTimeHour;
            const dailyWage = workHour * Employee.WagePerHour;
            resolve({ dailyWage, workHour });
        } else {
            reject('Employee is Absent, no wage');
        }
    });
}

async CalculateMonthlyWage() {
    while (this.TotalWorkingDays < Employee.MaxWorkingDays && this.TotalWorkingHour < Employee.MaxWorkingHours) {
        try {
            let attendance = await Employee.checkAttendance();
            const { dailyWage, workHour } = await this.DailyWageCalculator(attendance);

            this.TotalWagePerMonth += dailyWage;
            this.TotalWorkingHour += workHour;
            this.TotalWorkingDays += 1;

            console.log(`Day ${this.TotalWorkingDays}: Wage for the day is Rs. ${dailyWage}, Total hours worked: ${this.TotalWorkingHour}`);
        } catch (error) {
            console.log(`Day ${this.TotalWorkingDays + 1}: ${error}`);
            this.TotalWorkingDays+= 1;
        }

        if (this.TotalWorkingHour >= Employee.MaxWorkingHours) {
            console.log(`Reached maximum working hours: ${this.TotalWorkingHour}`);
            break;
        }
    }

    return this.TotalWagePerMonth;
}
}

async function EmpWageComputation() {
console.log('Welcome to the Employee Wage Computation');
const employee = new Employee();
try {
    const TotalWagePerMonth = await employee.CalculateMonthlyWage();
    console.log(`Total wage for the month is Rs. ${TotalWagePerMonth}`);
} catch (error) {
    console.log(error);
}
}
EmpWageComputation();