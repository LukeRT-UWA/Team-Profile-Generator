const BaseEmployee = require("./BaseEmployee");

class Engineer extends BaseEmployee {
constructor (name, id, email, officeNo) {
    super(name, id, email);
        this.officeNo = officeNo
}
}

module.exports = Engineer;