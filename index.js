/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function createEmployeeRecord(empRecordArray){
    let employeeRecordObj = {
        firstName:empRecordArray[0],
        familyName:empRecordArray[1],
        title:empRecordArray[2],
        payPerHour:empRecordArray[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
    return employeeRecordObj
}

function createEmployeeRecords(allEmployeeArray){
    let employeeArray = []
    allEmployeeArray.forEach(employeeObj =>{ employeeArray.push(createEmployeeRecord(employeeObj))
    })
    return employeeArray
}

function createTimeInEvent(dateStamp){
    console.log(dateStamp)
}