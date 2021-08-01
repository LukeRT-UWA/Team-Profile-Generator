const BaseEmployee = require("./BaseEmployee");

class Manager extends BaseEmployee {
    constructor (name, id, email, officeNo) {
    super(name, id, email);
        this.officeNo = officeNo
}
}

module.exports = Manager;