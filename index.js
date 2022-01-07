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
    let dateStampString = dateStamp.split(' ')
    let timeInObj = {
        type:"TimeIn",
        hour:parseInt(dateStampString[1]),
        date:dateStampString[0]
    }
    this.timeInEvents.push(timeInObj)
    return this
}

function createTimeOutEvent(dateStamp){
    let dateStampString = dateStamp.split(' ')
    let timeOutObj = {
        type:"TimeOut",
        hour:parseInt(dateStampString[1]),
        date:dateStampString[0]
    }
    this.timeOutEvents.push(timeOutObj)
    return this
}

function hoursWorkedOnDate(formDate){
    // console.log(dateStamp)
    let inDate = this.timeInEvents
        .find(event => event.date === formDate)

    let outDate = this.timeOutEvents
        .find(event => event.date === formDate)

    let totalHours = ((outDate.hour - inDate.hour) / 100)

    console.log(totalHours)
    return totalHours
}

function wagesEarnedOnDate(formDate){
    
}