const Employee = require("./Employee");

class Engineer extends Employee {
constructor (name, id, email, officeNo) {
    super(name, id, email);
        this.officeNo = officeNo
}
}

module.exports = Engineer;