const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNo) {
    super(name, id, email);
        this.officeNo = officeNo
}
}

Manager.prototype.getOfficeNo = function(){
    return this.officeNo
}

Manager.prototype.getRole = function(){
    return "Manager"
}

module.exports = Manager;