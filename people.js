function Human(humam) {
    const { name, lastName, location, phoneNumber } = humam;

    this.name = name;
    this.lastName = lastName;
    this.location = location;
    this.phoneNumber = phoneNumber;
}

function Employee(employee) {
    const { position, startDate, department } = employee;

    Human.apply(this, arguments);

    this.position = position;
    this.startDate = startDate;
    this.department = department;

}

function CurrentEmployee(currentEmployee) {
   const { baseSalary, salaryCurrency } = currentEmployee;

   Employee.apply(this, arguments);

   this.baseSalary = baseSalary;
   this.salaryCurrency = salaryCurrency;
}

function FormerEmployee(formerEmployee) {
    const { endDate } = formerEmployee;

    this.endDate = endDate;
}

Human.prototype = {
    eat : function () {
        console.log("I'm eating...")
    },

    sleep : function () {
        console.log("I'm sleeping...")
    },

    callFriend : function () {
        console.log("Calling my friend...")
    }
}

Employee.prototype = Object.create(Human.prototype);
Employee.prototype.constructor = Employee;

CurrentEmployee.prototype = Object.create(Employee.prototype);
CurrentEmployee.prototype.constructor = CurrentEmployee;

FormerEmployee.prototype = Object.create(Employee.prototype);
FormerEmployee.prototype.constructor = FormerEmployee;

// расширение прототипа CurrentEmployee(добавляем его методы)

CurrentEmployee.prototype.writeReport = function () {
    console.log("I'm writing a report")
};

CurrentEmployee.prototype.organizeMeeting = function () {
    console.log("I'm planing to organise the meeting at 10 tomorrow!!!")
};

CurrentEmployee.prototype.startVacation = function () {
    console.log("My vacation is starting the next week");
};

CurrentEmployee.prototype.retire = function () {
        console.log("I'm going to retire next month");
};

const john = {
    name: "John",
    lastName: "Smith",
    phoneNumber: "+1234567890",
    location: "Russia",
    position: "Senior engineer",
    startDate: "10.10.1990",
    baseSalary: "10000",
    salaryCurrency: "$",
    department: "IT",

    eat: function() {},
    sleep: function() {},
    callFriend: function() {},
    writeReport: function() {},
    organizeMeeting: function () {},
    retire: function () {},
    startVacation: function () {}
};

const currentEmployee = new CurrentEmployee(john);
console.log(currentEmployee.eat());
console.log(currentEmployee.sleep());
console.log(currentEmployee.writeReport());

