const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNo) {
    super(name, id, email);
        this.officeNo = officeNo
}
}

module.exports = Manager;